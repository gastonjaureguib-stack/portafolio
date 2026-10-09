
import { profile } from '../../data/profile';

const ClassicAbout = () => {
  return (
    <section className="sobre-mi">

      <h2>
        Sobre mí
      </h2>

      {profile.about.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}

    </section>
  );
};

export default ClassicAbout;
