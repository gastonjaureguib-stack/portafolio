import './Skills.css';

const skillGroups = [

  // =========================================================
  // FRONTEND
  // =========================================================

  {
    comment: '// frontend',
    name: 'frontend',
    skills: [
      {
        name: 'CSS',
        logo: '/logos/logocss.png',
      },
      {
        name: 'JavaScript',
        logo: '/logos/logojavascript.png',
      },
      {
        name: 'React',
        logo: '/logos/logoreact.png',
      },
      {
        name: 'Bootstrap',
        logo: '/logos/logoboostrap.png',
      },
      {
        name: 'Vite',
        logo: '/logos/logovite.png',
      },
    ],
  },


  // =========================================================
  // BACKEND
  // =========================================================

  {
    comment: '// backend',
    name: 'backend',
    skills: [
      {
        name: 'Node.js',
        logo: '/logos/logonode.png',
      },
      {
        name: 'Express.js',
        logo: '/logos/logoexpress.png',
      },
      {
        name: 'MongoDB',
        logo: '/logos/logomongo.png',
      },
      {
        name: 'Mongoose',
        logo: '/logos/logomongoose.png',
      },
      {
        name: 'REST API',
        logo: '/logos/logorestapi.png',
      },
      {
        name: 'Socket.io',
        logo: '/logos/logosocket.png',
      },
    ],
  },


  // =========================================================
  // BASES DE DATOS Y SERVICIOS
  // =========================================================

  {
    comment: '// bases de datos y servicios',
    name: 'database',
    skills: [
      {
        name: 'MongoDB Atlas',
        logo: '/logos/logomongoatlas.png',
      },
      {
        name: 'Supabase',
        logo: '/logos/logosupabase.png',
      },
      {
        name: 'Firebase',
        logo: '/logos/logofirebase.png',
      },
    ],
  },


  // =========================================================
  // HERRAMIENTAS
  // =========================================================

  {
    comment: '// herramientas de desarrollo',
    name: 'tools',
    skills: [
      {
        name: 'VS Code',
        logo: '/logovisualstudio.png',
      },
    ],
  },


  // =========================================================
  // CMS Y PLATAFORMAS
  // =========================================================

  {
    comment: '// cms y plataformas',
    name: 'cms',
    skills: [
      {
        name: 'WordPress',
        logo: '/logowordpress.png',
      },
      {
        name: 'Wix',
        logo: '/logowix.png',
      },
    ],
  },


  // =========================================================
  // DISEÑO
  // =========================================================

  {
    comment: '// diseño',
    name: 'design',
    skills: [
      {
        name: 'Canva',
        logo: '/logocanva.png',
      },
      {
        name: 'CorelDRAW',
        logo: '/logocorel.png',
      },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="section">

      {/* =====================================================
          TÍTULO
      ===================================================== */}

      <div className="section-heading">

        <span className="section-comment">
          // tecnologías y herramientas que puedo manejar
        </span>

        <h2 className="section-title">

          <span className="keyword">
            const
          </span>{' '}

          <span className="variable">
            skills
          </span>

          {' = { }'}

        </h2>

      </div>


      {/* =====================================================
          INICIO OBJETO
      ===================================================== */}

      <div className="skills-code-intro">

        <span className="keyword">
          const
        </span>{' '}

        <span className="variable">
          myStack
        </span>

        {' = {'}

      </div>


      {/* =====================================================
          GRUPOS
      ===================================================== */}

      <div className="skills-groups">

        {skillGroups.map((group) => (

          <div
            className="skill-group"
            key={group.name}
          >

            {/* COMENTARIO */}

            <span className="comment">
              {group.comment}
            </span>


            {/* NOMBRE DEL GRUPO */}

            <div className="skill-group-title">

              <span className="property">
                {group.name}
              </span>

              : [

            </div>


            {/* LOGOS */}

            <div className="skills-logos">

              {group.skills.map((skill) => (

                <div
                  className="skill-tool"
                  key={skill.name}
                >

                  <div className="skill-logo-container">

                    <img
                      src={skill.logo}
                      alt={`Logo ${skill.name}`}
                      className="skill-logo"
                    />

                  </div>


                  <span className="skill-name">
                    "{skill.name}"
                  </span>

                </div>

              ))}

            </div>


            {/* CIERRE ARRAY */}

            <div className="skill-close">
              ],
            </div>

          </div>

        ))}

      </div>


      {/* =====================================================
          CIERRE OBJETO
      ===================================================== */}

      <div className="skills-code-close">
        {'};'}
      </div>

    </section>
  );
};

export default Skills;