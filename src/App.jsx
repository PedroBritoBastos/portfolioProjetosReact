import Navbar from './components/Navbar/Navbar'
import SectionTecnologias from './components/SectionTecnologias/SectionTecnologias';
import SectionProjetos from './components/SectionProjetos/SectionProjetos';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <SectionTecnologias/>
        <SectionProjetos/>
      </BrowserRouter>
    </> 
  )
}

export default App
