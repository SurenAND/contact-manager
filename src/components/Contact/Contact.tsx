import { ContactType } from "../../api/api.type";
import Button from "../shared/Button/Button";

type ContactProps = {
  data: ContactType;
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
  idToDelete: React.MutableRefObject<number>;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  idToEdit: React.MutableRefObject<number>;
};

const Contact = ({
  data,
  setOpenDelete,
  idToDelete,
  setOpenEdit,
  idToEdit,
}: ContactProps) => {
  const handleDeleteBtn = () => {
    idToDelete.current = data.id as number;
    setOpenDelete(true);
  };

  const handleEditBtn = () => {
    idToEdit.current = data.id as number;
    setOpenEdit(true);
  };
  return (
    <>
      <div className="md:h-[17vh] border border-gray-200 bg-gray-200 basis-[48%] flex-grow md:flex-grow-0 py-3 px-5 rounded-lg shadow-lg flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-sm">
            نام:{" "}
            <span className="font-normal text-gray-700">
              {data.firstName + " " + data.lastName}
            </span>
          </h4>
          <h4 className="font-semibold text-sm">
            شماره موبایل:{" "}
            <span className="font-normal text-gray-700">
              {data.phoneNumber}
            </span>
          </h4>
          <h4 className="font-semibold text-sm">
            نسبت:{" "}
            <span className="font-normal text-gray-700">{data.relation}</span>
          </h4>
          <h4 className="font-semibold text-sm">
            ایمیل:{" "}
            <span className="font-normal text-gray-700">{data.email}</span>
          </h4>
        </div>
        <div className="flex md:justify-end justify-center">
          <Button
            innerText="ویرایش"
            bgColor="bg-blue-500"
            textColor="white"
            px="3"
            py="2"
            borderRadius="rounded-r-lg"
            onClick={handleEditBtn}
          />
          <Button
            innerText="حذف"
            bgColor="bg-red-500"
            textColor="white"
            px="3"
            py="2"
            borderRadius="rounded-l-lg"
            onClick={handleDeleteBtn}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
