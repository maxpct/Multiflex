import './BotonProceso.css';

// Este botón filtra la tabla para ver en proceso.
// Recibe el filtro que está puesto y la función para cambiarlo.
function BotonProceso({ filtro, cambiarFiltro }) {

  // Si este botón es el que está elegido, le ponemos la clase "activo".
  let clases = 'filtro';

  if (filtro === 'En proceso') {
    clases = 'filtro activo';
  }

  return (
    <button className={clases} onClick={() => cambiarFiltro('En proceso')}>
      En proceso
    </button>
  );
}

export default BotonProceso;
