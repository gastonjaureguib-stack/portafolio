
import {
  coderEducation,
  otherEducation,
} from '../../data/education';

import '../../styles/classic/ClassicEducation.css';

const ClassicEducation = () => {
  return (
    <section className="formacion">
      <h2>Formación</h2>

      {/* FORMACIÓN CODERHOUSE */}

      <div className="cv-formacion-group">
        <h3>
          Desarrollo Full Stack — Coderhouse
        </h3>

        <div className="cv-diplomas-grid">
          {coderEducation.map((diploma) => (
            <article
              className="cv-diploma-card"
              key={diploma.title}
            >
              <img
                src={diploma.diploma}
                alt={`Diploma ${diploma.title}`}
              />

              <div>
                <span className="titulo">
                  {diploma.title}
                </span>

                <span className="detalle">
                  {diploma.institution}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* OTRAS FORMACIONES */}

      <div className="card-formacion">
        {otherEducation.map((education) => (
          <div
            className="item-formacion"
            key={education.title}
          >
            <span className="titulo">
              {education.title}
            </span>

            <span className="detalle">
              {education.institution}
              {education.level && ` — ${education.level}`}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassicEducation;
