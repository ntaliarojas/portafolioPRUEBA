import React from "react";
import me from "../assets/images/me.jpeg";
import sakura from "../assets/images/sakura.png";

import udemy from "../assets/images/udemy.jpg";
import sena from "../assets/images/sena.jpg";
import unal from "../assets/images/unal.jpg";


const callouts = [
  {
    name: "SENA",
    description:
      "Tecnologo en analisis y desarrollo en sistemas de información",
    imageSrc: sena,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "UDEMY",
    description: "Curso Master en el diseño y desarrollo web",
    imageSrc: udemy,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "UNIVERSIDAD NACIONAL",
    description: "Desarrollo de aplicaciones moviles y web FULLSTACK",
    imageSrc: unal,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const SobreMi = () => {
  return (
    <section className="About sm:pt-8    justify-center items-center ">
      <div className="about2 flex flex-col lg:flex-row justify-center items-center p-8">
        <div className="flex items-center justify-center smmr-8">
          {" "}
          {/* Ajusté el margen lateral */}
          <img
            className="sakura sm:absolute sm:top-0 sm:right-0"
            src={sakura}
            alt="me"
            width="300px"
          />
        </div>

        <div className="about1 text-black mb-8 lg:mb-0 lg:mr-4">
          <div className="flex items-center justify-center mb-2">
            <img className="foto-me" src={me} alt="me" width="300px" />
          </div>

          <div className="text-black mb-4 lg:mb-0 lg:mr-4">
            <div className="text-[18px] flex items-center justify-center ">
              <h4>Hola yo soy</h4>
            </div>
            <div className="txt-about2 text-[38px] font-bold flex items-center justify-center ">
              <h1>
                NATALIA <span style={{ color: "#931621" }}>ROJAS</span>
              </h1>
            </div>
            <div className="text-[15px] flex items-center justify-center sm:mb-16">
              <h4>Desarrolladora web Front-End</h4>
            </div>
          </div>
        </div>

        <div className="text-black lg:mb-0 lg:mr-4 mt-4">
          {" "}
          {/* Ajusté el margen superior */}
          <div className="text-[38px] text-center flex items-center justify-center mb-4">
            <h5>
              Construyendo <span style={{ color: "#931621" }}>puentes</span>{" "}
              <br />
              entre creatividad <br />& tecnología.
            </h5>
          </div>
          <div className="description text-center text-[15px] flex items-center justify-center">
            <h4>
              Tecnóloga en análisis y desarrollo de sistemas de infrormacion
              <br />y estudiante en diseño de Aplicaciones moviles <br /> con +10
              meses de experiencia como <br /> desarrolladora <samp className="font-bold" style={{color:"#031a6b"}}>front</samp>
            </h4>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl h-screen  text-center  justify-center items-center p-8">
        <h1 className="txt-about3 text-[38px] text-black">
          VENGA<samp className="font-bold" style={{ color: "#031a6b" }}>LE</samp>
          <br /> CUENTO.
        </h1>
        <div className="pt-12 sm:pb-16 text-black">
          <p>
            soy una entusiasta del anime y la programación. Me encanta parchar
            por Bogotá especialmente en bicicleta durante las noches y pasar
            tiempo de calidad con mis amigos. Disfruto de una buena comida y una
            linda vista, me gusta crear cosas simples y eficientes, y
            porsupuesto crear recuerdos especiales en familia.
          </p>
        </div>

        <div className="Formacion">
          <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-4xl font-bold text-black">Formación</h2>

              <div className="text-black mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm  font-bold">
                      <a href={callout.href} style={{color:"#031a6b"}}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold ">
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>

             
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default SobreMi;
