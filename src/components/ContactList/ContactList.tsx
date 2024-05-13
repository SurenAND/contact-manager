import { useEffect } from "react";
import Contact from "../Contact/Contact";
import { getAPI } from "../api/GET";
import { ContactType } from "../api/api.type";

const ContactList = ({
  contacts,
  setContacts,
}: {
  contacts: ContactType[];
  setContacts: (contacts: ContactType[]) => void;
}) => {
  useEffect(() => {
    getAPI("contacts").then((res) => setContacts(res));
  }, []);

  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-2">
      <h2 className="font-bold text-lg">لیست کاربران</h2>
      <div className="w-full h-[400px] bg-gray-100 flex flex-wrap items-start gap-5 overflow-y-auto border border-gray-100 shadow-lg rounded-lg py-2 px-5">
        {contacts.map((item) => {
          return (
            <Contact
              key={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              phoneNumber={item.phoneNumber}
              relation={item.relation}
              email={item.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
