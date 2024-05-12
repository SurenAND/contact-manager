import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <Form />
        <div className="w-1/2 flex flex-col justify-center items-center">
          List
        </div>
      </div>
    </Layout>
  );
}

export default App;
