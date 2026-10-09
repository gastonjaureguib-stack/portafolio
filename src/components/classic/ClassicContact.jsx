
import { profile } from '../../data/profile';
import '../../styles/classic/ClassicContact.css';

const ClassicContact = () => {
  const { contact } = profile;

  return (
    <section
      id="contacto-cv"
      className="contacto"
    >
      <h2>Contacto</h2>

      <p>{contact.message}</p>

      <div className="cardinfo">
        <p>
          <strong>📞 Teléfono:</strong>{' '}
          {contact.phone}
        </p>

        <p>
          <strong>📧 Email:</strong>{' '}
          {contact.email}
        </p>

        <p>
          <strong>📍 Ubicación:</strong>{' '}
          {contact.location}
        </p>

        <div className="botones-contacto">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-contacto"
          >
            WhatsApp
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="btn-contacto"
          >
            Email
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-contacto"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassicContact;
