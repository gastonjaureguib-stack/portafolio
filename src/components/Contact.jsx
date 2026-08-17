import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="section contact">

      <span className="section-comment">
        // ¿construimos algo juntos?
      </span>

      <h2>
        <span className="keyword">
          function
        </span>{' '}

        <span className="variable">
          contactMe
        </span>
        ()
      </h2>

      <p className="contact-text">
        Estoy abierto a oportunidades laborales,
        colaboraciones y proyectos freelance.
      </p>

      <div className="contact-code">

        <p>
          <span className="keyword">
            return
          </span>{' '}
          {'{'}
        </p>


        {/* EMAIL */}

        <p>
          &nbsp;&nbsp;

          <span className="property">
            email
          </span>

          :{' '}

          <a
            href="mailto:gaston.jaureguib@gmail.com"
            className="string"
          >
            "gaston.jaureguib@gmail.com"
          </a>
          ,
        </p>


        {/* WHATSAPP */}

        <p>
          &nbsp;&nbsp;

          <span className="property">
            whatsapp
          </span>

          :{' '}

          <a
            href="https://wa.me/59891602323"
            target="_blank"
            rel="noreferrer"
            className="string"
          >
            "+598 91 602 323"
          </a>
          ,
        </p>


        {/* UBICACIÓN */}

        <p>
          &nbsp;&nbsp;

          <span className="property">
            location
          </span>

          :{' '}

          <span className="string">
            "Uruguay"
          </span>
          ,
        </p>


        {/* LINKEDIN */}

        <p>
          &nbsp;&nbsp;

          <span className="property">
            linkedin
          </span>

          :{' '}

          <a
            href="https://www.linkedin.com/in/gast%C3%B3n-jaureguiberry-01971320a/"
            target="_blank"
            rel="noreferrer"
            className="string"
          >
            "LinkedIn"
          </a>
        </p>


        <p>
          {'}'};
        </p>

      </div>

    </section>
  );
};

export default Contact;