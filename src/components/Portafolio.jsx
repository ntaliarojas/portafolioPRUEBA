import React from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";

const Portafolio = () => {
  return (
    <div className="portafolio justify-center items-center">

      <div className="  text-center  justify-center items-center ">
        <h1 className="pt-12 text-black font-bold txt-about4 text-[38px]">
          PROYECTOS
        </h1>
      </div>

      <div className=" py-12 sm:flex gap-6 px-16">

        <div className="card w-96 h-30 shadow-xl bg-gray-900 " >
          <figure>
            <img
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bases de Datos
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline"> <a href="https://github.com/ntaliarojas/FRONT">ver</a></div>
            </div>
          </div>
        </div>

        <div className="card w-96 h-30 shadow-xl bg-gray-900 " >
          <figure>
            <img
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Desarrollo Web
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline"> <a href="https://github.com/ntaliarojas/DesarrolloWeb">ver</a></div>
            </div>
          </div>
        </div>

        <div className="card w-96 h-30 shadow-xl bg-gray-900 " >
          <figure>
            <img
              src={img2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Más proyectos
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline"> <a href="https://github.com/ntaliarojas/FRONT">ver</a></div>
            </div>
          </div>
        </div>
      </div>

     
    </div>

  );
};

export default Portafolio;
