import { useEffect, useRef, useState } from "react";
import Contact from "../Contact/Contact";
import { getAPI } from "../../api/GET";
import { ContactType } from "../../api/api.type";
import { deleteAPI } from "../../api/DELETE";
import DeleteModal from "../shared/DeleteModal/DeleteModal";
import EditModal from "../shared/EditModal/EditModal";
import { putAPI } from "../../api/PUT";

const ContactList = ({
  contacts,
  setContacts,
}: {
  contacts: ContactType[];
  setContacts: (contacts: ContactType[]) => void;
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const idToDelete = useRef<number>(0);
  const idToEdit = useRef<number>(0);

  useEffect(() => {
    getAPI("contacts").then((res) => setContacts(res));
  }, [isDelete, isEdit]);

  const handleDelete = (id: number) => {
    deleteAPI("contacts", id).then(() => {
      setIsDelete((prev) => !prev);
    });
  };

  const handleEdit = (id: number, data: ContactType) => {
    putAPI("contacts", id, data).then(() => {
      setIsEdit((prev) => !prev);
    });
  };

  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-2">
      <h2 className="font-bold text-lg">لیست کاربران</h2>
      <div className="w-full h-[400px] bg-gray-100 flex flex-wrap items-start gap-5 overflow-y-auto border border-gray-100 shadow-lg rounded-lg py-2 px-5">
        {contacts.map((item) => {
          return (
            <Contact
              key={item.id}
              data={item}
              setOpenDelete={setOpenDelete}
              setOpenEdit={setOpenEdit}
              idToDelete={idToDelete}
              idToEdit={idToEdit}
            />
          );
        })}
      </div>
      <DeleteModal
        openDelete={openDelete}
        onClose={() => setOpenDelete(false)}
        action={() => handleDelete(idToDelete.current)}
      />
      <EditModal
        openEdit={openEdit}
        onClose={() => setOpenEdit(false)}
        action={handleEdit}
        idToEdit={idToEdit}
      />
    </div>
  );
};

export default ContactList;
