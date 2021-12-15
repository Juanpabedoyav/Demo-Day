import React from "react";
import { useSelector } from "react-redux";
import {
  ContenedorDetalles,
  ContenedorInfoPrincipal,
} from "../styles/PlantillaRenderCv4.styles";

const PlantillaRenderCv = () => {
  const { form1, form2 } = useSelector((state) => state.pdfData);
  //{form1.phone}
  //{form2.skills.map((el) => el + " ")}
  console.log(form1.image)
  return (
    <>
      <ContenedorInfoPrincipal>
        <div style={{ margin: "0 auto 25px auto", width: "120px", height: "120px"}}>
          <img
            src={form1.image}
            alt={form1.name}
          />
        </div>
        <h1>
          {form1.name} {form1.lastName}
        </h1>
        <div className="spanDiv">
          <span>{form1.position} </span>
        </div>
        <div>
          <p>Ciudad: {form1.place} </p>
          <p>Correo: {form1.email}</p>
          <p>Teléfono: {form1.phone.map((el) => el + " ")}</p>
        </div>
      </ContenedorInfoPrincipal>
      <ContenedorDetalles>
        <div className="contenedorInformacion">
          <div className="grid-1">
            <section>
              <h2 className="tituloHabilidades">Perfil</h2>
              <p className="parrafoPerfil">
                {form2.perfil}
              </p>
            </section>
            <section>
              <h2 className="tituloHabilidades">Idiomas</h2>
              <h4>Idiomas : {form2.language.map((el) => el + " ")}</h4>
            </section>
            <section>
              <h2 className="tituloHabilidades">Habilidades:</h2>
              {/* <div className="habilidadBarra"></div> */}
              {form2.skills.map((el) => {
                return <p className="textoHabilidades">{el}</p>;
              })}
            </section>
          </div>
          <div className="grid-2">
            <section>
              <h2 className="tituloHabilidades">Experiencia Profesional</h2>
            </section>
            <article>
              {form2.jobExperiences.map((el) => (
                <p className="experiencia">{el}</p>
              ))}
            </article>
          </div>
        </div>
      </ContenedorDetalles>
    </>
  );
};

export default PlantillaRenderCv;
