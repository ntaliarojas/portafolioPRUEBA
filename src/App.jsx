import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Portafolio from "./components/Portafolio";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <NavBar />
      <Routes>
        {/* Ruta para el componente Inicio */}
        <Route path="/" element={<Inicio />} />

        {/* Otras rutas */}
        <Route path="/SobreMi" element={<SobreMi />} />
        <Route path="/Portafolio" element={<Portafolio />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
