import './Experience.css';

const jobs = [
  {
    company: 'Freelance',
    role: 'Diseño gráfico / Desarrollo Web / Community Manager/ Marketing Digital.',
    period: '2022 — Actualidad',
  },
  {
    company: 'Centro Comercial e Industrial de Soriano',
    role: 'Encargado de Comunicación y Marketing',
    period: '2017 — 2022',
  },
  {
    company: 'Regency Hotels',
    role: 'Ejecutivo de Marketing para la cadena hotelera.',
    period: '2016 — 2017',
  },
  {
    company: 'Balmoral Hotels',
    role: 'Marketing y Eventos',
    period: '2014 — 2016',
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="section">

      <div className="section-heading">
        <span className="section-comment">
          // experiencia profesional
        </span>

        <h2 className="section-title">
          <span className="keyword">const</span>{' '}
          <span className="variable">experience</span>
        </h2>
      </div>

      <div className="experience-list">

        {jobs.map((job, index) => (
          <div className="experience-item" key={job.company}>

            <span className="line-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <p>
                <span className="property">
                  company
                </span>
                :{' '}
                <span className="string">
                  "{job.company}"
                </span>
              </p>

              <p>
                <span className="property">
                  role
                </span>
                :{' '}
                <span className="string">
                  "{job.role}"
                </span>
              </p>

              <p>
                <span className="property">
                  period
                </span>
                :{' '}
                <span className="string">
                  "{job.period}"
                </span>
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Experience;