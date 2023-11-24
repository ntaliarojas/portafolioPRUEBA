import React from "react";
import yo from "../assets/images/yo.jpeg";

const SobreMi = () => {
  return (
    <section className="sobreMi h-screen w-full">
      <div className="grid h-screen w-full grid-cols-1 md:grid-cols-4">
        <div className=" cuadro1 justify-center items-center flex">
          <h1
            className="text-center text-[50px] sm:text-[110px]"
            style={{ color: "#714056" }}
          >
            R'S
          </h1>
        </div>
        <div className="cuadro2">
          <h1
            className="txt-name2  text-center  lg:text-[60px] font-bold"
            style={{ color: "#714056" }}
          >
            LLERLY NATALIA ROJAS PUERTAS
          </h1>
          <div className="pt-3 list-about text-black flex gap-6 text-center justify-center items-center">
            <p className="font-bold">
              <a href="CV-front.pdf" download="CV-front.pdf">
                Descargar CV
              </a>
            </p>{" "}
            <p className="font-bold">
              <a href="https://www.linkedin.com/in/natalia-rojas-puertas/">
                LinkedIn
              </a>
            </p>
            <p className="font-bold">
              <a href="https://www.instagram.com/lamonroee_/">Instagram </a>
            </p>
          </div>
        </div>
        <div className=" cuadro4">
          <div className="pt-12 lg:pt-12 justify-center items-center">
            <h1 className="text-center text-[33px] sm:text-[38px]  font-bold">
              DESARROLLO WEB{" "}
            </h1>
          </div>
          <p className="pb-12 text-center pt-3">Universidad Nacional - En proceso</p>
        </div>

        <div className=" cuadro5   flex justify-center items-center">
          <img  className="yo hidden" src={yo} alt="" />
        </div>

        <div className=" cuadro6 ">
          <div className=" justify-center items-center">
            <h1 className="pt-3 pb-3 text-[23px] text-center sm:text-[25px] lg:text-[28px]  font-bold">
              VENGA LE CUENTO{" "}
            </h1>
          </div>
          <p className="pb-6 text-center  px-6 sm:text-[14px]">
            Soy una entusiasta del anime y la programación. Me encanta parchar
            por Bogotá especialmente en bicicleta durante las noches y pasar
            tiempo de calidad con mis amigos. Disfruto de una buena comida y una
            linda vista, me gusta crear cosas simples y eficientes, y por
            supuesto crear recuerdos especiales en familia
          </p>
        </div>

        <div className="pb-6 cuadro7 flex justify-center items-center">
          <div className="lg:px-6 inner-box text-center">
            <h5 className=" font-bold lg:pt-6">
              TECNOLOGÍA EN ANÁLISIS Y DESARROLLO EN SISTEMAS DE INFORMACIÓN
            </h5>
            <p className="pt-6 lg:pt-3">2021-2023</p>
          </div>
        </div>

        <div className="cuadro9 flex justify-center items-center">
          <h1
            className="text-center sm:text-[110px] font-bold"
            style={{ color: "#714056" }}
          >
            !SOBRE MI!
          </h1>
        </div>

        <div className=" cuadro10">
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
