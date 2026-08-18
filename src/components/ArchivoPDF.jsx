import './ArchivoPDF.css';

const ArchivoPDF = () => {
  return (
    <a
      href="/cvgastonjaureguiberry.pdf"
      download="CV-Gaston-Jaureguiberry.pdf"
      className="archivo-pdf-btn"
    >
      <i className="bi bi-file-earmark-pdf"></i>
      Descargar CV
    </a>
  );
};

export default ArchivoPDF;