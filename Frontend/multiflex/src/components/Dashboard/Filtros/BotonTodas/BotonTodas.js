import './BotonTodas.css';

// Este botón filtra la tabla para ver todas.
// Recibe el filtro que está puesto y la función para cambiarlo.
function BotonTodas({ filtro, cambiarFiltro }) {

  // Si este botón es el que está elegido, le ponemos la clase "activo".
  let clases = 'filtro';

  if (filtro === 'Todas') {
    clases = 'filtro activo';
  }

  return (
    <button className={clases} onClick={() => cambiarFiltro('Todas')}>
      Todas
    </button>
  );
}

export default BotonTodas;
