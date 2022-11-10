import { Route, Routes } from "react-router-dom";
import Layout from './components/shared/Layout';
import AddSuperDeveloper from './pages/AddSuperDeveloper';
import AllSuperDeveloper from './pages/AllSuperDeveloper';
import UpdateDeveloper from "./pages/UpdateDeveloper";

function App() {
  return (
    <Layout>
       <Routes>
        <Route path="/" element={<AllSuperDeveloper />} />
      </Routes>
      <Routes>
        <Route path="/superdeveloper-create" element={<AddSuperDeveloper />} />
        <Route path="/developer-update/:id"  element={<UpdateDeveloper />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
