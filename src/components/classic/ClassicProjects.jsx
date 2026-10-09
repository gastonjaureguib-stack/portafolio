
import { projects } from '../../data/projects';

import '../../styles/classic/ClassicProjects.css';

const ClassicProjects = () => {
  return (
    <section
      id="proyectos-cv"
      className="cv-proyectos-section"
    >
      <h2 className="cv-section-title">
        Proyectos destacados
      </h2>

      <div className="cards cv-project-grid">
        {projects.map((project) => (
          <article
            className="cardproyectos cv-project-card"
            key={project.name}
          >
            {/* TIPO DE PROYECTO */}

            <span className="cv-project-type">
              {project.type}
            </span>

            {/* NOMBRE */}

            <h3>{project.name}</h3>

            {/* DESCRIPCIÓN */}

            <p>{project.description}</p>

            {/* TECNOLOGÍAS */}

            <div className="cv-tech-list">
              {project.stack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            {/* ENLACE */}

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="boton-proyectos"
              >
                Visitar proyecto
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClassicProjects;
