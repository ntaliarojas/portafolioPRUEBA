import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <header className="header flex gap-6 px-12 py-4">
      <div className="flex items-center">
        <span style={{color:"#691e1e" }} className="text-2xl font-bold  text-black">R'S</span>
      </div>
      <nav className=" text-[11px] sm:text-[18px] flex gap-4 items-center text-black">
      <span>|</span>

        <Link to="/Inicio" className="hover:underline">Inicio</Link>
        <Link to="/SobreMi" className="hover:underline">Sobre Mí</Link>
        <Link to="/Portafolio" className="hover:underline">Portafolio</Link>

       
      </nav>
    </header>
  );
};

export default NavBar;
