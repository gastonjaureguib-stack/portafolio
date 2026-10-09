
import { jobs } from '../../data/experience';
import { skillGroups } from '../../data/skills';

import '../../styles/classic/ClassicExperience.css';

const ClassicExperience = () => {

  // Reutilizamos los logos de skills.js
  const allSkills = skillGroups.flatMap(
    (group) => group.skills
  );

  const getToolLogo = (toolName) => {
    const tool = allSkills.find(
      (skill) => skill.name === toolName
    );

    return tool?.logo;
  };

  return (
    <section className="experiencia-titulo">

      <h2>Experiencia Profesional</h2>

      {jobs.map((job) => (
        <div
          className="experiencia"
          key={job.company}
        >

          {/* EMPRESA Y CARGO */}

          <h3>{job.company}</h3>

          <p>{job.role}</p>

          {/* PERÍODO */}

          <p className="cv-periodo">
            {job.period}
          </p>

          {/* DESCRIPCIÓN DE TAREAS */}

          {job.description?.length > 0 && (
            <p>
              {job.description.map((item, index) => (
                <span key={index}>
                  {item}

                  {index < job.description.length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </p>
          )}

          {/* HERRAMIENTAS UTILIZADAS */}

          {job.tools?.length > 0 && (
            <div className="cv-experience-tools">

              <strong>
                Herramientas utilizadas
              </strong>

              <div className="herramientas-logos">
                {job.tools.map((toolName) => {
                  const logo = getToolLogo(toolName);

                  return logo ? (
                    <img
                      key={toolName}
                      src={logo}
                      alt={toolName}
                    />
                  ) : null;
                })}
              </div>

            </div>
          )}

          {/* REFERENCIA LABORAL */}

          {job.reference && (
            <div className="contactoreferencia">

              <span className="referencialaboral">
                Referencia: {job.reference.name}

                {job.reference.detail && (
                  <> ({job.reference.detail})</>
                )}
              </span>

              {job.reference.whatsapp && (
                <a
                  href={`https://wa.me/${job.reference.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="boton-referencia"
                >
                  Contactar
                </a>
              )}

            </div>
          )}

        </div>
      ))}

    </section>
  );
};

export default ClassicExperience;
