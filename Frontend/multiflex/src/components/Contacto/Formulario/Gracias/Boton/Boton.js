import './Boton.css';

// Este botón lleva a la subpágina donde se ve el comprobante.
function Boton({ cambiarPagina }) {
  return (
    <button
      className="enlace-comprobante"
      onClick={() => cambiarPagina('comprobante')}
    >
      Ver mi comprobante en PDF
    </button>
  );
}

export default Boton;
