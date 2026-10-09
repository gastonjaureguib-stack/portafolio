
import { profile } from '../../data/profile';
import '../../styles/global/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <p className="comment">
        // developed with React
      </p>

      <p>
        <span className="keyword">
          const
        </span>{' '}

        <span className="variable">
          copyright
        </span>

        {' = '}

        <span className="string">
          "{`© ${currentYear} ${profile.name}`}"
        </span>;

      </p>

    </footer>
  );
};

export default Footer;
