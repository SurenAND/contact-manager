import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="flex justify-between items-start gap-3">
        <Form />
        <ContactList />
      </div>
    </Layout>
  );
}

export default App;
