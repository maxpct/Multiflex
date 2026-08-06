import './Filtros.css';
import BotonTodas from './BotonTodas/BotonTodas';
import BotonPendientes from './BotonPendientes/BotonPendientes';
import BotonProceso from './BotonProceso/BotonProceso';
import BotonTerminadas from './BotonTerminadas/BotonTerminadas';

// Estos son los botones que cambian la información de la tabla.
function Filtros({ filtro, cambiarFiltro }) {
  return (
    <div className="filtros">
      <BotonTodas filtro={filtro} cambiarFiltro={cambiarFiltro} />
      <BotonPendientes filtro={filtro} cambiarFiltro={cambiarFiltro} />
      <BotonProceso filtro={filtro} cambiarFiltro={cambiarFiltro} />
      <BotonTerminadas filtro={filtro} cambiarFiltro={cambiarFiltro} />
    </div>
  );
}

export default Filtros;
