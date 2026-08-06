import './Vacio.css';

// Este componente se muestra cuando todavía no se ha generado ningún PDF.
// Recibe cambiarPagina para poder mandar al usuario al formulario.
function Vacio({ cambiarPagina }) {
  return (
    <div className="vacio">
      <div className="vacio-caja">
        <p className="vacio-titulo">Aún no hay comprobante</p>
        <p className="vacio-texto">Llena el formulario de contacto y tu comprobante aparecerá aquí.</p>

        {/* Este botón lleva a la subpágina de contacto */}
        <button className="vacio-enlace" onClick={() => cambiarPagina('contacto')}>
          Ir al formulario
        </button>
      </div>
    </div>
  );
}

export default Vacio;
