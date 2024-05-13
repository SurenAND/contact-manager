import { useState } from "react";
import Layout from "../Layout/Layout";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import { ContactType } from "../api/api.type";

const Home = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  return (
    <Layout>
      <div className="flex justify-between items-start gap-3">
        <Form setContacts={setContacts} />
        <ContactList contacts={contacts} setContacts={setContacts} />
      </div>
    </Layout>
  );
};

export default Home;
