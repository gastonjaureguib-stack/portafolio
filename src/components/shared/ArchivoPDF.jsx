
import '../../styles/global/ArchivoPDF.css';

const ArchivoPDF = () => {
  return (
    <a
      href="/cvgastonjaureguiberry.pdf"
      download="CV-Gaston-Jaureguiberry.pdf"
      className="archivo-pdf-btn"
      aria-label="Descargar currículum en PDF"
    >
      <i
        className="bi bi-file-earmark-pdf"
        aria-hidden="true"
      ></i>

      Descargar CV
    </a>
  );
};

export default ArchivoPDF;
