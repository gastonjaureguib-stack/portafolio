
import { profile } from '../../data/profile';

const About = () => {
  return (
    <section id="sobre-mi" className="section">

      <div className="section-heading">
        <span className="section-comment">
          // quién soy
        </span>

        <h2 className="section-title">
          <span className="keyword">const</span>{' '}
          <span className="variable">aboutMe</span>
        </h2>
      </div>

      <div className="code-card">

        <div className="code-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>

          <span className="file-name">
            about.js
          </span>
        </div>

        <div className="code-content">

          <p className="code-line">
            <span className="keyword">const</span>{' '}
            <span className="variable">aboutMe</span> = {'{'}
          </p>

          <p className="code-line indent">
            <span className="property">profile</span>:{' '}
            <span className="string">
              "{profile.role}"
            </span>,
          </p>

          <p className="code-line indent">
            <span className="property">background</span>: [
          </p>

          {profile.background.map((item, index) => (
            <p
              className="code-line indent-2 string"
              key={item}
            >
              "{item}"{index < profile.background.length - 1 ? ',' : ''}
            </p>
          ))}

          <p className="code-line indent">
            ],
          </p>

          <p className="code-line indent">
            <span className="property">mindset</span>:{' '}
            <span className="string">
              "{profile.mindset}"
            </span>,
          </p>

          <p className="code-line indent">
            <span className="property">goal</span>:{' '}
            <span className="string">
              "{profile.goal}"
            </span>
          </p>

          <p className="code-line">
            {'};'}
          </p>

        </div>
      </div>

    </section>
  );
};

export default About;
