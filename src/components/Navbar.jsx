import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-logo">
          <span className="keyword">const</span>{' '}
          <span className="variable">GJ</span>
          <span className="navbar-symbol"> = {'{}'}</span>
        </a>

        <div className="navbar-links">
          <a href="#sobre-mi">about()</a>
          <a href="#skills">skills()</a>
          <a href="#proyectos">projects()</a>
          <a href="#experiencia">experience()</a>
          <a href="#contacto">contact()</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;