import './Resumen.css';
import TarjetaTotal from './TarjetaTotal/TarjetaTotal';
import TarjetaPendientes from './TarjetaPendientes/TarjetaPendientes';
import TarjetaProceso from './TarjetaProceso/TarjetaProceso';
import TarjetaTerminadas from './TarjetaTerminadas/TarjetaTerminadas';

// Aquí traemos la función que cuenta las solicitudes por estado.
import { contarPorEstado } from '../../../services/solicitudes';

// Esta es la fila de arriba con los cuatro totales.
function Resumen({ solicitudes }) {

  // Contamos cuántas hay de cada estado.
  const total = solicitudes.length;
  const pendientes = contarPorEstado(solicitudes, 'Pendiente');
  const proceso = contarPorEstado(solicitudes, 'En proceso');
  const terminadas = contarPorEstado(solicitudes, 'Finalizada');

  return (
    <div className="resumen">
      <TarjetaTotal numero={total} />
      <TarjetaPendientes numero={pendientes} />
      <TarjetaProceso numero={proceso} />
      <TarjetaTerminadas numero={terminadas} />
    </div>
  );
}

export default Resumen;
