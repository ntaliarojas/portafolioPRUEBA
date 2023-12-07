import React from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";


import html from "../assets/images/icon-html.png";
import css from "../assets/images/icon-css.png";
import sass from "../assets/images/icon-sass.png";
import js from "../assets/images/icon-js.png";
import git from "../assets/images/icon-git.png";
import php from "../assets/images/php.png";
import laravel from "../assets/images/laravel.png";

const Portafolio = () => {
  return (
    <section id="Portafolio" className="portafolio justify-center items-center">

      <div className="  text-center  justify-center items-center ">
        <h1 className="pt-12 text-black font-bold txt-about4 text-[38px]">
          <samp className="text-[42px] font-bold" style={{ color: "#931621" }}>P</samp>ROYECTOS
        </h1>
      </div>

      <div className=" py-12 lg:flex gap-6 px-16 justify-center items-center">
        
        <div className="card w-96 h-30 shadow-xl bg-gray-900 ">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bases de Datos</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div style={{ color: "#931621" }} className="badge badge-outline">
                {" "}
                <a href="https://github.com/ntaliarojas/FRONT">ver</a>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-96 h-30 shadow-xl bg-gray-900 ">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Desarrollo Web</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div style={{ color: "#931621" }} className="badge badge-outline">
                {" "}
                <a href="https://github.com/ntaliarojas/DesarrolloWeb">ver</a>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-96 h-30 shadow-xl bg-gray-900 ">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Más proyectos </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div style={{ color: "#931621" }} className="badge badge-outline">
                {" "}
                <a href="https://github.com/ntaliarojas/FRONT">ver</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="skills sm:pt-12 px-6">
        <div className="">
          <h1 className="text-4xl text-center font-bold text-black" style={{ color: "#031a6b" }}>Tecnologias</h1>
        </div>

        <div className="skill-icon pt-12 gap-12 pb-12 flex flex-wrap justify-center items-center">
          <div className="icon w-1/2 w-auto mb-4">
            <img src={html} alt="html"  />
          </div>
          <div className="icon w-1/2 w-auto mb-4">
            <img src={css} alt="html" width="90px" />
          </div>
          <div className="icon w-1/2 w-auto mb-4">
            <img src={sass} alt="html" width="90px" />
          </div>
          <div className="icon w-1/2 w-auto mb-4">
            <img src={js} alt="html" width="90px" />
          </div>
          <div className="icon w-1/2 w-auto mb-4">
            <img src={php} alt="html" width="90px" />
          </div>
          <div className="icon w-1/2 w-auto mb-4">
            <img src={laravel} alt="html" width="90px" />
          </div>
          <div className="icon w-1/2 w-auto mb-4">
            <img src={git} alt="html" width="90px" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portafolio;
