import Home from "./Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import AddNewStudent from "./AddNewStudent";
import StudentTable from "./StudentTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addNewStudent" element={<AddNewStudent />} />
          <Route path="/studenttable" element={<StudentTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
