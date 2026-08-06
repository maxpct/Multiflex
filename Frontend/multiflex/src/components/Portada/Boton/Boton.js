import './Boton.css';

// Este botón lleva a la subpágina de contacto.
function Boton({ cambiarPagina }) {
  return (
    <button
      className="portada-boton"
      onClick={() => cambiarPagina('contacto')}
    >
      Solicitar servicio
    </button>
  );
}

export default Boton;
