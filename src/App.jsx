

import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Portafolio from "./components/Portafolio";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main className="main ">
    <NavBar />
    <Routes>
      <Route path="/Inicio" element={<Inicio/>}></Route>
      <Route path="/SobreMi" element={<SobreMi/>}></Route>
      <Route path="/Portafolio" element={<Portafolio/>}></Route>

      <Route></Route>

    </Routes>
  
  
  
    
    </main>
  );
}

export default App;
