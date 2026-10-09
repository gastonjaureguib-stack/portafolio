
import { services } from '../../data/services';

import '../../styles/classic/ClassicServices.css';

const ClassicServices = () => {
  return (
    <section className="servicios">
      <h2>¿En qué puedo ayudarte?</h2>

      <div className="cards-servicios">
        <div className="cv-services-list">
          {services.map((service) => (
            <p key={service}>
              • {service}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassicServices;
