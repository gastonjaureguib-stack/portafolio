
import { skillGroups } from '../../data/skills';
import '../../styles/dev/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section">

      {/* TÍTULO */}

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

      {/* INICIO OBJETO */}

      <div className="skills-code-intro">

        <span className="keyword">
          const
        </span>{' '}

        <span className="variable">
          myStack
        </span>

        {' = {'}

      </div>

      {/* GRUPOS DE TECNOLOGÍAS */}

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

      {/* CIERRE OBJETO */}

      <div className="skills-code-close">
        {'};'}
      </div>

    </section>
  );
};

export default Skills;
