import './Boton.css';

// Este botón lleva a la subpágina del formulario.
function Boton({ cambiarPagina }) {
  return (
    <button className="dash-vacio-boton" onClick={() => cambiarPagina('contacto')}>
      Ir al formulario
    </button>
  );
}

export default Boton;
