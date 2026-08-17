import { Link } from 'react-router-dom';
import './CV.css';

const CV = () => {
  const skills = [
    {
      name: 'React',
      logo: '/logoreact.png',
    },
    {
      name: 'JavaScript',
      logo: '/logojavascript.png',
    },
    {
      name: 'HTML',
      logo: '/logohtml.png',
    },
    {
      name: 'CSS',
      logo: '/logocss.png',
    },
    {
      name: 'Node.js',
      logo: '/logonode.png',
    },
    {
      name: 'MongoDB',
      logo: '/logomongo.png',
    },
    {
      name: 'Supabase',
      logo: '/logosupabase.png',
    },
    {
      name: 'VS Code',
      logo: '/logovisualstudio.png',
    },
    {
      name: 'Canva',
      logo: '/logocanva.png',
    },
    {
      name: 'CorelDRAW',
      logo: '/logocorel.png',
    },
    {
      name: 'Wix',
      logo: '/logowix.png',
    },
    {
      name: 'WordPress',
      logo: '/logowordpress.png',
    },
  ];

  const diplomas = [
    {
      title: 'Desarrollo Web',
      institution: 'Coderhouse',
      image: '/diplomadesarrollo.jpg',
    },
    {
      title: 'JavaScript',
      institution: 'Coderhouse',
      image: '/diplomajavascript.png',
    },
    {
      title: 'React JS',
      institution: 'Coderhouse',
      image: '/diplomareact.png',
    },
    {
      title: 'Backend',
      institution: 'Coderhouse',
      image: '/diplomabackend1.png',
    },
  ];

  return (
    <div className="cv-normal">

      {/* ======================================================
          PORTADA
      ====================================================== */}

      <header className="portada">

        <div className="cv-top-actions">
          <Link to="/" className="cv-volver">
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
          Gastón Jaureguiberry
        </h1>

        <h2 className="tituloh2">
          Full Stack Developer
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


      {/* ======================================================
          PERFIL PROFESIONAL
      ====================================================== */}

      <section className="profesional">

        <h2>
          Perfil profesional
        </h2>

        <p>
          Desarrollador Full Stack con formación en desarrollo web
          y experiencia previa en comunicación, marketing y diseño.
          Esta combinación me permite comprender tanto los aspectos
          técnicos de un producto como las necesidades de negocio
          que existen detrás de cada proyecto.
        </p>

        <p>
          Trabajo con tecnologías frontend y backend para desarrollar
          aplicaciones, sitios web y soluciones digitales funcionales,
          claras y orientadas a resultados. Mantengo un enfoque de
          aprendizaje constante, organización del código y mejora continua.
        </p>

      </section>


      {/* ======================================================
          SOBRE MÍ
      ====================================================== */}

      <section className="sobre-mi">

        <h2>
          Sobre mí
        </h2>

        <p>
          Me interesa construir productos digitales que resuelvan
          necesidades reales. Mi experiencia en marketing y comunicación
          me ayuda a entender al usuario, el objetivo comercial y la
          estrategia detrás de un desarrollo.
        </p>

        <p>
          Actualmente desarrollo proyectos propios y trabajos freelance,
          mientras continúo profundizando mis conocimientos en desarrollo
          frontend, backend y arquitectura de aplicaciones.
        </p>

      </section>


      {/* ======================================================
          PROYECTOS
      ====================================================== */}

      <section
        id="proyectos-cv"
        className="cv-proyectos-section"
      >

        <h2 className="cv-section-title">
          Proyectos destacados
        </h2>

        <div className="cards cv-project-grid">

          {/* SPOTTER */}

          <article className="cardproyectos cv-project-card">

            <span className="cv-project-type">
              Web App
            </span>

            <h3>
              Spotter
            </h3>

            <p>
              Aplicación web desarrollada con React y Supabase
              que permite capturar fotografías y transformarlas
              en cards coleccionables mediante inteligencia artificial.
            </p>

            <p>
              Incluye autenticación de usuarios, álbumes por categoría,
              comunidad, likes, almacenamiento en Supabase y generación
              de imágenes con IA.
            </p>

            <div className="cv-tech-list">
              <span>React</span>
              <span>Supabase</span>
              <span>JavaScript</span>
              <span>Vite</span>
              <span>IA</span>
            </div>

            <a
              href="https://spoterapps.com"
              target="_blank"
              rel="noreferrer"
              className="boton-proyectos"
            >
              Visitar Spotter
            </a>

          </article>


          {/* KANSHA */}

          <article className="cardproyectos cv-project-card">

            <span className="cv-project-type">
              Website
            </span>

            <h3>
              Kansha Viajes
            </h3>

            <p>
              Desarrollo web para agencia de viajes orientado a
              presentar destinos, promociones, paquetes y experiencias
              de manera visual y clara.
            </p>

            <p>
              El proyecto combina desarrollo frontend, diseño,
              comunicación digital y estrategia de contenidos.
            </p>

            <div className="cv-tech-list">
              <span>React</span>
              <span>CSS</span>
              <span>Vite</span>
              <span>Vercel</span>
            </div>

            <a
              href="https://kanshaviajes.com"
              target="_blank"
              rel="noreferrer"
              className="boton-proyectos"
            >
              Visitar Kansha
            </a>

          </article>


          {/* ECOMMERCE */}

          <article className="cardproyectos cv-project-card">

            <span className="cv-project-type">
              Web App
            </span>

            <h3>
              E-commerce React
            </h3>

            <p>
              SPA desarrollada con React con navegación por categorías,
              detalle de productos, carrito de compras y generación
              de órdenes.
            </p>

            <p>
              Proyecto desarrollado como parte de mi formación frontend,
              utilizando Firebase como base de datos.
            </p>

            <div className="cv-tech-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>Firebase</span>
              <span>Vite</span>
            </div>

          </article>


          {/* BACKEND */}

          <article className="cardproyectos cv-project-card">

            <span className="cv-project-type">
              Backend / API
            </span>

            <h3>
              API Agencia de Viajes
            </h3>

            <p>
              Backend desarrollado con Node.js, Express y MongoDB
              para gestionar servicios turísticos, reservas y mensajes.
            </p>

            <p>
              Incluye arquitectura en capas, validaciones con Zod,
              MongoDB Atlas, Handlebars y comunicación en tiempo real
              mediante Socket.io.
            </p>

            <div className="cv-tech-list">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Zod</span>
              <span>Socket.io</span>
            </div>

          </article>

        </div>

      </section>


      {/* ======================================================
          EXPERIENCIA
      ====================================================== */}

      <section className="experiencia-titulo">

        <h2>
          Experiencia Profesional
        </h2>


        {/* FREELANCE */}

        <div className="experiencia">

          <h3>
            Freelance — Diseño y Desarrollo Web
          </h3>

          <p className="cv-periodo">
            2022 — Actualidad
          </p>

          <p>
            Desarrollo de sitios web y aplicaciones para
            emprendedores y negocios.
            <br />
            Desarrollo de soluciones digitales personalizadas.
            <br />
            Diseño gráfico, branding y contenido para redes sociales.
            <br />
            Gestión y optimización de presencia digital.
          </p>

          <div className="cv-experience-tools">

            <strong>
              Herramientas utilizadas
            </strong>

            <div className="herramientas-logos">

              <img
                src="/logovisualstudio.png"
                alt="VS Code"
              />

              <img
                src="/logocanva.png"
                alt="Canva"
              />

              <img
                src="/logocorel.png"
                alt="CorelDRAW"
              />

              <img
                src="/logowix.png"
                alt="Wix"
              />

              <img
                src="/logowordpress.png"
                alt="WordPress"
              />

            </div>

          </div>

          <div className="contactoreferencia">

            <span className="referencialaboral">
              Referencia: Laura Rodriguez (Cliente)
            </span>

            <a
              href="https://wa.me/59899278555"
              target="_blank"
              rel="noreferrer"
              className="boton-referencia"
            >
              Contactar
            </a>

          </div>

        </div>


        {/* CENTRO COMERCIAL */}

        <div className="experiencia">

          <h3>
            Centro Comercial e Industrial de Soriano
          </h3>

          <p>
            Encargado de Comunicación y Marketing
          </p>

          <p className="cv-periodo">
            2017 — 2022
          </p>

          <p>
            Gestión de comunicación institucional, marketing,
            contenido y acciones de promoción.
          </p>

          <div className="contactoreferencia">

            <span className="referencialaboral">
              Referencia: Alicia Irarzabal
            </span>

            <a
              href="https://wa.me/59897347637"
              target="_blank"
              rel="noreferrer"
              className="boton-referencia"
            >
              Contactar
            </a>

          </div>

        </div>


        {/* REGENCY */}

        <div className="experiencia">

          <h3>
            Regency Hotels
          </h3>

          <p>
            Ejecutivo de Marketing para la cadena
          </p>

          <div className="contactoreferencia">

            <span className="referencialaboral">
              Referencia: Nicolás Mitta
            </span>

            <a
              href="https://wa.me/59899500706"
              target="_blank"
              rel="noreferrer"
              className="boton-referencia"
            >
              Contactar
            </a>

          </div>

        </div>


        {/* BALMORAL */}

        <div className="experiencia">

          <h3>
            Balmoral Hotels
          </h3>

          <p>
            Ejecutivo de Marketing y Eventos
          </p>

          <p className="cv-periodo">
            2013 — 2016
          </p>

        </div>

      </section>


      {/* ======================================================
          HABILIDADES
      ====================================================== */}

      <section className="servicios">

        <h2>
          Habilidades y herramientas
        </h2>

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

                <span>
                  {skill.name}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          SERVICIOS
      ====================================================== */}

      <section className="servicios">

        <h2>
          ¿En qué puedo ayudarte?
        </h2>

        <div className="cards-servicios">

          <div className="cv-services-list">

            <p>
              • Desarrollo de páginas web
            </p>

            <p>
              • Desarrollo de aplicaciones web
            </p>

            <p>
              • Landing pages
            </p>

            <p>
              • Integración con bases de datos
            </p>

            <p>
              • Desarrollo frontend con React
            </p>

            <p>
              • Desarrollo backend con Node.js
            </p>

            <p>
              • Branding e identidad visual
            </p>

            <p>
              • Diseño de contenido para redes
            </p>

            <p>
              • Optimización de presencia digital
            </p>

          </div>

        </div>

      </section>


      {/* ======================================================
          FORMACIÓN
      ====================================================== */}

      <section className="formacion">

        <h2>
          Formación
        </h2>


        {/* CODERHOUSE */}

        <div className="cv-formacion-group">

          <h3>
            Desarrollo Full Stack — Coderhouse
          </h3>

          <div className="cv-diplomas-grid">

            {diplomas.map((diploma) => (

              <article
                className="cv-diploma-card"
                key={diploma.title}
              >

                <img
                  src={diploma.image}
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

          <div className="item-formacion">

            <span className="titulo">
              Analista en Comunicación y Marketing
            </span>

            <span className="detalle">
              Universidad ORT
            </span>

          </div>


          <div className="item-formacion">

            <span className="titulo">
              Técnico en Relaciones Públicas y
              Organización de Eventos
            </span>

            <span className="detalle">
              Universidad ORT
            </span>

          </div>


          <div className="item-formacion">

            <span className="titulo">
              Inglés
            </span>

            <span className="detalle">
              First Certificate — Dickens
            </span>

          </div>

        </div>

      </section>


      {/* ======================================================
          CONTACTO
      ====================================================== */}

      <section
        id="contacto-cv"
        className="contacto"
      >

        <h2>
          Contacto
        </h2>

        <p>
          Abierto a oportunidades laborales,
          colaboraciones y proyectos freelance.
        </p>

        <div className="cardinfo">

          <p>
            <strong>
              📞 Teléfono:
            </strong>{' '}
            +598 91 602 323
          </p>

          <p>
            <strong>
              📧 Email:
            </strong>{' '}
            gaston.jaureguib@gmail.com
          </p>

          <p>
            <strong>
              📍 Ubicación:
            </strong>{' '}
            Uruguay
          </p>


          <div className="botones-contacto">

            <a
              href="https://wa.me/59891602323"
              target="_blank"
              rel="noreferrer"
              className="btn-contacto"
            >
              WhatsApp
            </a>

            <a
              href="mailto:gaston.jaureguib@gmail.com"
              className="btn-contacto"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/gast%C3%B3n-jaureguiberry-01971320a/"
              target="_blank"
              rel="noreferrer"
              className="btn-contacto"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* ======================================================
          FOOTER
      ====================================================== */}

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
          © 2026 - Gastón Jaureguiberry |
          Desarrollo Web & Estrategia Digital
        </p>

      </footer>

    </div>
  );
};

export default CV;