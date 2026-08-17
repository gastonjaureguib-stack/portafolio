import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">

        <div className="hero-terminal">
          <span className="terminal-user">
            gaston@portfolio
          </span>

          <span className="terminal-symbol">:</span>

          <span className="terminal-path">~</span>

          <span className="terminal-symbol">$</span>

          <span> npm run dev</span>
        </div>

        <div className="hero-code">

          <p className="comment">
            // Hola, soy
          </p>

          <h1>
            Gastón
            <br />
            Jaureguiberry
          </h1>

          <div className="hero-object">

            <p>
              <span className="keyword">
                const
              </span>{' '}

              <span className="variable">
                developer
              </span>

              {' = {'}
            </p>

            <p className="hero-indent">
              <span className="property">
                role
              </span>

              :{' '}

              <span className="string">
                "Full Stack Developer"
              </span>
              ,
            </p>

            <p className="hero-indent">
              <span className="property">
                location
              </span>

              :{' '}

              <span className="string">
                "Uruguay"
              </span>
              ,
            </p>

            <p className="hero-indent">
              <span className="property">
                creative
              </span>

              :{' '}

              <span className="boolean">
                true
              </span>
              ,
            </p>

            <p className="hero-indent">
              <span className="property">
                available
              </span>

              :{' '}

              <span className="boolean">
                true
              </span>
            </p>

            <p>
              {'};'}
            </p>

          </div>

          <p className="hero-description">
            Desarrollo soluciones digitales combinando código,
            diseño y visión de negocio.
          </p>

          <div className="hero-buttons">

            <div className="hero-buttons-main">

              <a
                href="#proyectos"
                className="btn-primary"
              >
                Ver proyectos
              </a>

              <a
                href="#contacto"
                className="btn-secondary"
              >
                Contactarme
              </a>

            </div>

            <div className="hero-classic">

              <Link
                to="/cv"
                className="btn-classic"
              >
                Ver versión clásica
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;