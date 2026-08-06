// Importamos el CSS del componente.
import './Enlaces.css';

// Este componente muestra los enlaces del menú.
// Cada uno lleva a una página distinta.
function Enlaces({ paginaActual, cambiarPagina }) {
  return (
    <>
      <button
        className={paginaActual === 'inicio' ? 'enlace activo' : 'enlace'}
        onClick={() => cambiarPagina('inicio')}
      >
        Inicio
      </button>

      {/* Los servicios ya no son una página aparte: están abajo del banner
          en la página de inicio. Por eso este enlace baja hasta ellos
          con el href, y de paso nos regresa al inicio con el onClick. */}
      <a
        className="enlace"
        href="#servicios"
        onClick={() => cambiarPagina('inicio')}
      >
        Servicios
      </a>

      <button
        className={paginaActual === 'contacto' ? 'enlace activo' : 'enlace'}
        onClick={() => cambiarPagina('contacto')}
      >
        Contacto
      </button>

      <button
        className={paginaActual === 'comprobante' ? 'enlace activo' : 'enlace'}
        onClick={() => cambiarPagina('comprobante')}
      >
        Comprobante
      </button>

      <button
        className={paginaActual === 'dashboard' ? 'enlace activo' : 'enlace'}
        onClick={() => cambiarPagina('dashboard')}
      >
        Dashboard
      </button>
    </>
  );
}

export default Enlaces;
