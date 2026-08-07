import './Visor.css';

// Este componente muestra el PDF dentro de la página.
//
// El "enlace" apunta a nuestro propio backend, no a PDFMonkey.
// Esto es a propósito: el enlace de PDFMonkey no se puede meter
// en un iframe porque su servidor lo bloquea, y el visor
// se quedaría en blanco aunque el PDF sí exista.
//
// El "respaldo" es el enlace directo, por si el navegador
// de plano no puede mostrar el PDF aquí dentro.
function Visor({ enlace, respaldo }) {
  return (
    <div className="visor">
      <iframe
        className="visor-pdf"
        src={enlace}
        title="Comprobante de solicitud Multiflex"
      >
        {/* Esto solo se ve si el navegador no puede mostrar el PDF */}
        <p>
          Tu navegador no puede mostrar el PDF aquí.{' '}
          <a href={respaldo} target="_blank" rel="noreferrer">
            Ábrelo en una pestaña nueva
          </a>
        </p>
      </iframe>
    </div>
  );
}

export default Visor;
