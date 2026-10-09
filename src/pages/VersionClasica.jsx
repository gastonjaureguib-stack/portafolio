
import ClassicHeader from '../components/classic/ClassicHeader';
import ClassicProfile from '../components/classic/ClassicProfile';
import ClassicAbout from '../components/classic/ClassicAbout';
import ClassicProjects from '../components/classic/ClassicProjects';
import ClassicExperience from '../components/classic/ClassicExperience';
import ClassicSkills from '../components/classic/ClassicSkills';
import ClassicServices from '../components/classic/ClassicServices';
import ClassicEducation from '../components/classic/ClassicEducation';
import ClassicContact from '../components/classic/ClassicContact';
import ClassicFooter from '../components/classic/ClassicFooter';

import '../styles/classic/VersionClasica.css';

const VersionClasica = () => {
  return (
    <div className="cv-normal">

      <ClassicHeader />

      <ClassicProfile />

      <ClassicAbout />

      <ClassicProjects />

      <ClassicExperience />

      <ClassicSkills />

      <ClassicServices />

      <ClassicEducation />

      <ClassicContact />

      <ClassicFooter />

    </div>
  );
};

export default VersionClasica;
