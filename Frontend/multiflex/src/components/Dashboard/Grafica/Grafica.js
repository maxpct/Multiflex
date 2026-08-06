import './Grafica.css';
import Titulo from './Titulo/Titulo';
import BarraPlomeria from './BarraPlomeria/BarraPlomeria';
import BarraElectricidad from './BarraElectricidad/BarraElectricidad';
import BarraPintura from './BarraPintura/BarraPintura';
import BarraImpermeabilizacion from './BarraImpermeabilizacion/BarraImpermeabilizacion';
import BarraLimpieza from './BarraLimpieza/BarraLimpieza';
import BarraJardineria from './BarraJardineria/BarraJardineria';

// Aquí traemos las funciones que cuentan y que miden las barras.
import { contarPorServicio, mayorDeServicios, anchoDeBarra } from '../../../services/solicitudes';

// Esta es la gráfica de barras: muestra cuántas solicitudes
// tiene cada servicio. Cada barra es su propio componente.
function Grafica({ solicitudes }) {

  // Contamos cuántas solicitudes tiene cada servicio.
  const plomeria = contarPorServicio(solicitudes, 'Plomería');
  const electricidad = contarPorServicio(solicitudes, 'Electricidad');
  const pintura = contarPorServicio(solicitudes, 'Pintura');
  const impermeabilizacion = contarPorServicio(solicitudes, 'Impermeabilización');
  const limpieza = contarPorServicio(solicitudes, 'Limpieza');
  const jardineria = contarPorServicio(solicitudes, 'Jardinería');

  // Buscamos cuál servicio tiene más, para que esa barra sea la más larga.
  const mayor = mayorDeServicios(solicitudes);

  return (
    <div className="grafica">
      <Titulo />

      <BarraPlomeria numero={plomeria} ancho={anchoDeBarra(plomeria, mayor)} />
      <BarraElectricidad numero={electricidad} ancho={anchoDeBarra(electricidad, mayor)} />
      <BarraPintura numero={pintura} ancho={anchoDeBarra(pintura, mayor)} />
      <BarraImpermeabilizacion numero={impermeabilizacion} ancho={anchoDeBarra(impermeabilizacion, mayor)} />
      <BarraLimpieza numero={limpieza} ancho={anchoDeBarra(limpieza, mayor)} />
      <BarraJardineria numero={jardineria} ancho={anchoDeBarra(jardineria, mayor)} />
    </div>
  );
}

export default Grafica;
