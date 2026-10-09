
import { profile } from '../../data/profile';

import '../../styles/classic/ClassicAbout.css';

const ClassicProfile = () => {
  return (
    <section className="profesional">
      <h2>Perfil profesional</h2>

      {profile.professionalProfile.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default ClassicProfile;
