
import { useState, useEffect } from 'react';

import {
  coderEducation,
  otherEducation,
} from '../../data/education';

import '../../styles/dev/Education.css';

const Education = () => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);

  useEffect(() => {
    if (!selectedDiploma) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedDiploma(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedDiploma]);

  return (
    <>
      <section id="formacion" className="section">

        {/* TÍTULO */}

        <div className="section-heading">
          <span className="section-comment">
            // formación y certificaciones
          </span>

          <h2 className="section-title">
            <span className="keyword">
              const
            </span>{' '}

            <span className="variable">
              education
            </span>

            {' = []'}
          </h2>
        </div>

        {/* FORMACIÓN CODERHOUSE */}

        <div className="education-block">

          <div className="education-code-title">
            <span className="keyword">
              const
            </span>{' '}

            <span className="variable">
              coderhouse
            </span>

            {' = ['}
          </div>

          <div className="diplomas-grid">

            {coderEducation.map((education) => (

              <article
                className="diploma-card"
                key={education.title}
              >

                {/* IMAGEN DEL DIPLOMA */}

                <div
                  className="diploma-image-container"
                  onClick={() => setSelectedDiploma(education)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver diploma de ${education.title}`}
                  onKeyDown={(event) => {
                    if (
                      event.key === 'Enter' ||
                      event.key === ' '
                    ) {
                      event.preventDefault();
                      setSelectedDiploma(education);
                    }
                  }}
                >

                  <img
                    src={education.diploma}
                    alt={`Diploma ${education.title}`}
                    className="diploma-image"
                  />

                  <div className="diploma-overlay">
                    <span>
                      verDiploma()
                    </span>
                  </div>

                </div>

                {/* INFORMACIÓN */}

                <div className="diploma-info">

                  <p>
                    <span className="property">
                      course
                    </span>

                    :{' '}

                    <span className="string">
                      "{education.title}"
                    </span>
                  </p>

                  <p>
                    <span className="property">
                      institution
                    </span>

                    :{' '}

                    <span className="string">
                      "{education.institution}"
                    </span>
                  </p>

                  <p>
                    <span className="property">
                      certified
                    </span>

                    :{' '}

                    <span className="boolean">
                      {String(education.certified)}
                    </span>
                  </p>

                </div>

              </article>

            ))}

          </div>

          <div className="education-code-close">
            ];
          </div>

        </div>

        {/* OTRA FORMACIÓN */}

        <div className="education-block other-education">

          <div className="education-code-title">
            <span className="keyword">
              const
            </span>{' '}

            <span className="variable">
              otherEducation
            </span>

            {' = ['}
          </div>

          <div className="other-education-list">

            {otherEducation.map((education) => (

              <div
                className="other-education-item"
                key={education.title}
              >

                <span>
                  {'{ '}
                </span>

                <span className="property">
                  course
                </span>

                <span>
                  :{' '}
                </span>

                <span className="string">
                  "{education.title}"
                </span>

                {/* NIVEL OPCIONAL */}

                {education.level && (
                  <>
                    <span>
                      ,{' '}
                    </span>

                    <span className="property">
                      level
                    </span>

                    <span>
                      :{' '}
                    </span>

                    <span className="string">
                      "{education.level}"
                    </span>
                  </>
                )}

                <span>
                  ,{' '}
                </span>

                <span className="property">
                  institution
                </span>

                <span>
                  :{' '}
                </span>

                <span className="string">
                  "{education.institution}"
                </span>

                <span>
                  {' },'}
                </span>

              </div>

            ))}

          </div>

          <div className="education-code-close">
            ];
          </div>

        </div>

      </section>

      {/* MODAL DEL DIPLOMA */}

      {selectedDiploma && (

        <div
          className="diploma-modal"
          onClick={() => setSelectedDiploma(null)}
          role="presentation"
        >

          <button
            type="button"
            className="diploma-modal-close"
            onClick={() => setSelectedDiploma(null)}
            aria-label="Cerrar diploma"
          >
            ×
          </button>

          <div
            className="diploma-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={`Diploma ${selectedDiploma.title}`}
            onClick={(event) => event.stopPropagation()}
          >

            <div className="diploma-modal-header">

              <span className="comment">
                // {selectedDiploma.institution}
              </span>

              <p>
                <span className="keyword">
                  const
                </span>{' '}

                <span className="variable">
                  certificate
                </span>

                {' = '}

                <span className="string">
                  "{selectedDiploma.title}"
                </span>

                ;
              </p>

            </div>

            <img
              src={selectedDiploma.diploma}
              alt={`Diploma ${selectedDiploma.title}`}
              className="diploma-modal-image"
            />

          </div>

        </div>

      )}

    </>
  );
};

export default Education;
