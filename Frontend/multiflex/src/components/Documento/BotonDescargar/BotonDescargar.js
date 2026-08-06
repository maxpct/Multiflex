import './BotonDescargar.css';

// Este botón descarga el PDF a la computadora.
function BotonDescargar({ enlace }) {
  return (
    <a
      className="boton-descargar"
      href={enlace}
      download
    >
      Descargar PDF
    </a>
  );
}

export default BotonDescargar;
