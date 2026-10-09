
import { skillGroups } from '../../data/skills';

import '../../styles/classic/ClassicSkills.css';

const ClassicSkills = () => {
  const skills = skillGroups.flatMap((group) => group.skills);

  return (
    <section className="servicios">
      <h2>Habilidades y herramientas</h2>

      <p>
        Tecnologías y programas que utilizo en desarrollo,
        diseño y comunicación.
      </p>

      <div className="cards-servicios">
        <div className="cv-skills-grid">
          {skills.map((skill) => (
            <div
              className="cv-skill"
              key={skill.name}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassicSkills;
