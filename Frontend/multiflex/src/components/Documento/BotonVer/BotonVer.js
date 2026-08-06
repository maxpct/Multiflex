import './BotonVer.css';

// Este botón abre el PDF en una pestaña nueva.
function BotonVer({ enlace }) {
  return (
    <a
      className="boton-ver"
      href={enlace}
      target="_blank"
      rel="noreferrer"
    >
      Ver PDF
    </a>
  );
}

export default BotonVer;
