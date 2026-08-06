import './BotonPendientes.css';

// Este botón filtra la tabla para ver pendientes.
// Recibe el filtro que está puesto y la función para cambiarlo.
function BotonPendientes({ filtro, cambiarFiltro }) {

  // Si este botón es el que está elegido, le ponemos la clase "activo".
  let clases = 'filtro';

  if (filtro === 'Pendiente') {
    clases = 'filtro activo';
  }

  return (
    <button className={clases} onClick={() => cambiarFiltro('Pendiente')}>
      Pendientes
    </button>
  );
}

export default BotonPendientes;
