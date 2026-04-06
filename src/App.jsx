import Navbar from "./components/Navbar/Navbar";
import SectionProjetos from "./components/SectionProjetos/SectionProjetos";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
