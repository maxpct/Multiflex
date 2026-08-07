import './BotonTerminadas.css';

// Este botón filtra la tabla para ver terminadas.
// Recibe el filtro que está puesto y la función para cambiarlo.
function BotonTerminadas({ filtro, cambiarFiltro }) {

  // Si este botón es el que está elegido, le ponemos la clase "activo".
  let clases = 'filtro';

  if (filtro === 'Finalizada') {
    clases = 'filtro activo';
  }

  return (
    <button className={clases} onClick={() => cambiarFiltro('Finalizada')}>
      Finalizadas
    </button>
  );
}

export default BotonTerminadas;
