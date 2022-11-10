import { Route, Routes } from "react-router-dom";
import Layout from './components/shared/Layout';
import AddSuperDeveloper from './pages/AddSuperDeveloper';
import AllSuperDeveloper from './pages/AllSuperDeveloper';
import UpdateSuperDeveloper from "./pages/UpdateSuperDeveloper";
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllSuperDeveloper />} />
      </Routes>
      <Routes>
        <Route path="/superdeveloper-create"
          element={<AddSuperDeveloper />} />
        <Route path="/superdeveloper-update/:id"
          element={<UpdateSuperDeveloper />} />
      </Routes>
    </Layout>
  );
}

export default App;
