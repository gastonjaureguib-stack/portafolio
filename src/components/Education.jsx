import { useState } from 'react';
import './Education.css';


// =========================================================
// FORMACIÓN CODERHOUSE
// =========================================================

const coderEducation = [
  {
    title: 'Desarrollo Web',
    institution: 'Coderhouse',
    diploma: '/diplomadesarrollo.jpg',
  },
  {
    title: 'JavaScript',
    institution: 'Coderhouse',
    diploma: '/diplomajavascript.png',
  },
  {
    title: 'React JS',
    institution: 'Coderhouse',
    diploma: '/diplomareact.png',
  },
  {
    title: 'Backend',
    institution: 'Coderhouse',
    diploma: '/diplomabackend1.png',
  },
];


// =========================================================
// OTRA FORMACIÓN
// =========================================================

const otherEducation = [
  {
    title: 'Analista en Comunicación y Marketing',
    institution: 'Universidad ORT',
  },
  {
    title: 'Técnico en Relaciones Públicas y Organización de Eventos',
    institution: 'Universidad ORT',
  },
  {
    title: 'Inglés',
    level: 'First Certificate',
    institution: 'Dickens',
  },
];


// =========================================================
// COMPONENTE
// =========================================================

const Education = () => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);

  return (
    <>
      <section id="formacion" className="section">

        {/* =====================================================
            TÍTULO
        ===================================================== */}

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


        {/* =====================================================
            CODERHOUSE
        ===================================================== */}

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


          {/* DIPLOMAS */}

          <div className="diplomas-grid">

            {coderEducation.map((education) => (

              <article
                className="diploma-card"
                key={education.title}
              >

                {/* IMAGEN */}

                <div
                  className="diploma-image-container"
                  onClick={() =>
                    setSelectedDiploma(education)
                  }
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
                      true
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


        {/* =====================================================
            OTRA FORMACIÓN
        ===================================================== */}

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

                {/* ABRIR OBJETO */}

                <span>
                  {'{ '}
                </span>


                {/* COURSE */}

                <span className="property">
                  course
                </span>

                <span>
                  :{' '}
                </span>

                <span className="string">
                  "{education.title}"
                </span>


                {/* LEVEL - SOLO SI EXISTE */}

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


                {/* INSTITUTION */}

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


                {/* CERRAR OBJETO */}

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


      {/* =========================================================
          MODAL DIPLOMA
      ========================================================= */}

      {selectedDiploma && (

        <div
          className="diploma-modal"
          onClick={() =>
            setSelectedDiploma(null)
          }
        >

          {/* CERRAR */}

          <button
            className="diploma-modal-close"
            onClick={() =>
              setSelectedDiploma(null)
            }
            aria-label="Cerrar diploma"
          >
            ×
          </button>


          {/* CONTENIDO */}

          <div
            className="diploma-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* HEADER */}

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


            {/* DIPLOMA GRANDE */}

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