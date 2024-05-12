import Button from "../shared/Button/Button";

type ContactProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  relation: string;
  email: string;
};

const Contact = ({
  firstName,
  lastName,
  phoneNumber,
  relation,
  email,
}: ContactProps) => {
  return (
    <>
      <div className="md:h-[17vh] border border-gray-200 bg-gray-200 basis-[48%] flex-grow md:flex-grow-0 py-3 px-5 rounded-lg shadow-lg flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-sm">
            نام:{" "}
            <span className="font-normal text-gray-700">
              {firstName + " " + lastName}
            </span>
          </h4>
          <h4 className="font-semibold text-sm">
            شماره موبایل:{" "}
            <span className="font-normal text-gray-700">{phoneNumber}</span>
          </h4>
          <h4 className="font-semibold text-sm">
            نسبت: <span className="font-normal text-gray-700">{relation}</span>
          </h4>
          <h4 className="font-semibold text-sm">
            ایمیل: <span className="font-normal text-gray-700">{email}</span>
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
          />
          <Button
            innerText="حذف"
            bgColor="bg-red-500"
            textColor="white"
            px="3"
            py="2"
            borderRadius="rounded-l-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
