
import { Routes, Route } from 'react-router-dom';

// Componentes compartidos
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

// Componentes del portfolio developer
import Hero from './components/dev/Hero';
import About from './components/dev/About';
import Skills from './components/dev/Skills';
import Projects from './components/dev/Projects';
import Experience from './components/dev/Experience';
import Education from './components/dev/Education';
import Contact from './components/dev/Contact';

// Página del CV clásico
import VersionClasica from './pages/VersionClasica';

// Portfolio principal
const Portfolio = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

// Rutas de la aplicación
function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/cv" element={<VersionClasica />} />
    </Routes>
  );
}

export default App;
