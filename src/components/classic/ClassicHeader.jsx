
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';

const ClassicHeader = () => {
  return (
    <header className="portada">

      <div className="cv-top-actions">

        <Link
          to="/"
          className="cv-volver"
        >
          ← Portfolio creativo
        </Link>

        <button
          type="button"
          className="cv-imprimir"
          onClick={() => window.print()}
        >
          Imprimir / Guardar PDF
        </button>

      </div>

      <h1 className="tituloh1">
        {profile.name}
      </h1>

      <h2 className="tituloh2">
        Frontend Developer · React
      </h2>

      <p className="cv-role-extra">
        Desarrollo Web · Comunicación · Marketing · Diseño
      </p>

      <p className="slogan">
        Desarrollo soluciones digitales combinando programación,
        diseño, experiencia de usuario y comprensión de objetivos
        de negocio.
      </p>

      <div className="botonagil">

        <a
          href="#proyectos-cv"
          className="botonproyectos"
        >
          Ver proyectos
        </a>

        <a
          href="#contacto-cv"
          className="botoncontacto"
        >
          Contactarme
        </a>

      </div>

    </header>
  );
};

export default ClassicHeader;
