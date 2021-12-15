import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { PlantillaCv2 } from "../styles/PlantillaRenderCv2.style";

const PlantillaRenderCv1 = () => {
  const { form1, form2 } = useSelector((state) => state.pdfData);
  // const{name} =form1;
  console.log(form1);
  console.log(form2);
  return (
    <div>
      <PlantillaCv2>
        <div className="detalle">
          <div className="img-plantilla">
            {/* <img  src='https://www.hoja-de-vida.co/wp-content/uploads/2021/07/hoja-de-vida-descargar-gratis-word.jpg' alt=''/> */}
          </div>
          <h1 className="name">{form1.name}</h1>
          <h2 className="last-name">{form1.lastName}</h2>
          <h3 className="position">{form1.position}</h3>
          <hr style={{ marginTop: "20px" }} />

          <section className="contact">
            <h1>Contacto</h1>
            <ul className="contact-list">
              <li>{form1.email}</li>

              <li>Ciudad:{form1.place}</li>
            </ul>
          </section>
          <section className="profile">
            <h1>Perfil</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
        </div>

        <div className="info">
          <section className="expeciencia-profesional">
            <h1>Experiencia Profesional</h1>

            {form2.jobExperiences.map((el) => (
              <article className="list-profesional">
                <ul>
                  {form2.skills.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
          <section className="educacion">
            <h1>Cualidades</h1>
            <article className="list-educacion">
              <ul>
                {form2.qualities.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </article>
            <h1>Habilidades</h1>
            <article className="list-educacion">
              <ul>
                {form2.skills.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </article>
            <h1>Motivaciones</h1>
            <article className="list-educacion">
              <ul>
                {form2.motivation.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </article>
            <h1>Idiomas</h1>
            <article className="list-educacion">
              <ul>
                {form2.language.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </article>
          </section>
        </div>
      </PlantillaCv2>
    </div>
  );
};

export default PlantillaRenderCv1;
