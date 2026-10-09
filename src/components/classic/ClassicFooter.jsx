
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';

const ClassicFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>

      <div className="footer-links">

        <Link to="/">
          Portfolio creativo
        </Link>

        <a href="#proyectos-cv">
          Proyectos
        </a>

        <a href="#contacto-cv">
          Contacto
        </a>

      </div>

      <p>
        © {currentYear} - {profile.name} |
        {' '}Desarrollo Web & Estrategia Digital
      </p>

    </footer>
  );
};

export default ClassicFooter;
