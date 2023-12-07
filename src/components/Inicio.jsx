import React from "react";
import code from "../assets/images/linkedin.png";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";

const Inicio = () => {
  return (
    <section id="Inicio" className="inicio h-screen w-full flex justify-center items-center">
      <div className="max-w-screen-xl flex flex-col lg:flex-row justify-center items-center">
       
        {/* Nombrea */}
        <div className=" txt-name mb-4 lg:mb-0 lg:mr-4">
          <div  className=" text-[38px] lg:text-[5rem]   flex items-center justify-center ">
            <h1 >NATALIA ROJA'S</h1>
          </div>
        </div>

        <div className="mb-4 lg:hidden lg:mb-0 lg:mr-4">
          <div className="text-last text-[18px] flex items-center justify-center ">
            <h1>FRONTED DEVELOPER</h1>
          </div>
        </div>

        <div className="redes mb-4 lg:mb-0 lg:mr-4">
          <div className="flex items-center justify-center lg:justify-start">
            <a href="#" className="mr-4">
              <img src={instagram} alt="insta" width="30px" />
            </a>
            <a href="#">
              <img src={linkedin} alt="lin" width="30px" />
            </a>
          </div>
        </div>

        <div className="memoria mb-4  lg:mb-0 lg:mr-4">
          <div className="text-center lg:text-left">
            <ul className="pb-3 text-justify text-[10px] lg:text-[12px] text-black">
              <li>
                Memoria
                ..................................................................
              </li>
              <li>
                Celular:<span className="ml-8">3219271787</span>
              </li>
              <li>
                Ciudad:<span className="ml-8">Bogotá, Colombia</span>
              </li>
              <li>
                Correo:<span className="ml-9">llerlynatisrojaspuertas@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="code lg:mb-0 lg:mr-4">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="code">
              <img className="" src={code} alt="code" width="80px" />
            </div>
          </div>
        </div>

        <div className="text-center lg:flex lg:flex-col justify-center items-center">
          <p className="lg:text-[12rem] text-[100px] txt-parrafo text-white text-4xl lg:whitespace-nowrap transform -rotate-90">
            

          红小姐
          </p>
        </div>

      </div>
      <div className="burbujas">
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
      </div>
    </section>
  );
};

export default Inicio;
