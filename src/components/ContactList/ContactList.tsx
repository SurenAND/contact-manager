import { useEffect, useRef, useState } from "react";
import Contact from "../Contact/Contact";
import { getAPI } from "../../api/GET";
import { ContactType } from "../../api/api.type";
import { deleteAPI } from "../../api/DELETE";
import DeleteModal from "../shared/DeleteModal/DeleteModal";

const ContactList = ({
  contacts,
  setContacts,
}: {
  contacts: ContactType[];
  setContacts: (contacts: ContactType[]) => void;
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const idToDelete = useRef<number>(0);

  useEffect(() => {
    getAPI("contacts").then((res) => setContacts(res));
  }, [isDelete]);

  const handleDelete = (id: number) => {
    deleteAPI("contacts", id).then(() => {
      setIsDelete((prev) => !prev);
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
              setOpen={setOpen}
              idToDelete={idToDelete}
            />
          );
        })}
      </div>
      <DeleteModal
        open={open}
        onClose={() => setOpen(false)}
        action={() => handleDelete(idToDelete.current)}
      />
    </div>
  );
};

export default ContactList;
