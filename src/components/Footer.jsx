import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <p className="comment">
        // developed with React
      </p>

      <p>
        <span className="keyword">const</span>{' '}
        <span className="variable">copyright</span>
        {' = '}
        <span className="string">
          "© 2026 Gastón Jaureguiberry"
        </span>;
      </p>

    </footer>
  );
};

export default Footer;