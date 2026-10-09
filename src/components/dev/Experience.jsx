
import { jobs } from '../../data/experience';
import '../../styles/dev/Experience.css';

const Experience = () => {
  return (
    <section id="experiencia" className="section">

      <div className="section-heading">
        <span className="section-comment">
          // experiencia profesional
        </span>

        <h2 className="section-title">
          <span className="keyword">
            const
          </span>{' '}

          <span className="variable">
            experience
          </span>
        </h2>
      </div>

      <div className="experience-list">

        {jobs.map((job, index) => (
          <div
            className="experience-item"
            key={`${job.company}-${index}`}
          >

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
