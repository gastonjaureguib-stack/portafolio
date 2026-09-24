import './Projects.css';

const projects = [
  {
    name: 'Protectora de Animales de Mercedes',
    type: 'Web App',
    description:
      'Plataforma web desarrollada para una organización real, orientada a visibilizar animales en adopción y gestionar información desde un panel administrativo.',
    stack: [
      'React',
      'JavaScript',
      'Supabase',
      'CSS',
    ],
    status: 'online',
    url: 'https://adopciones.protectoramercedesapp.workers.dev',
  },

  {
    name: 'Kansha Viajes',
    type: 'Website / Web App',
    description:
      'Plataforma web para una agencia de viajes enfocada en presentar destinos, promociones y experiencias, con herramientas de gestión para la administración.',
    stack: [
      'React',
      'JavaScript',
      'Supabase',
      'CSS',
    ],
    status: 'online',
    url: 'https://kanshaviajes.com',
  },

  {
    name: 'Spotter',
    type: 'Web App',
    description:
      'Aplicación para capturar fotografías y transformarlas en cards coleccionables utilizando inteligencia artificial.',
    stack: [
      'React',
      'Supabase',
      'AI',
    ],
    status: 'building',
    url: 'https://spotterapps.com',
  },
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="section"
    >
      <div className="section-heading">

        <span className="section-comment">
          // algunas cosas que construí
        </span>

        <h2 className="section-title">
          <span className="keyword">
            const
          </span>{' '}

          <span className="variable">
            projects
          </span>{' '}

          = []
        </h2>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article
            className="project-card"
            key={project.name}
          >

            <span className="comment">
              {'// '}
              {project.type}
            </span>

            <h3>
              <span className="property">
                name
              </span>

              :{' '}

              <span className="string">
                "{project.name}"
              </span>
            </h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-stack">

              <span className="property">
                stack:
              </span>

              {project.stack.map((tech) => (
                <span key={tech}>
                  "{tech}"
                </span>
              ))}

            </div>

            <p className="project-status">

              <span className="property">
                status:
              </span>{' '}

              <span className="string">
                "{project.status}"
              </span>

            </p>

            {project.url && (
              <div className="project-link">

                <span className="keyword">
                  return
                </span>{' '}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  visitarProyecto()
                </a>;

              </div>
            )}

          </article>
        ))}

      </div>
    </section>
  );
};

export default Projects;