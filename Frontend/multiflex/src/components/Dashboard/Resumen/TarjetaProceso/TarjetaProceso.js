import './TarjetaProceso.css';
import Etiqueta from './Etiqueta/Etiqueta';
import Numero from './Numero/Numero';

// Esta tarjeta muestra las solicitudes en proceso.
// Recibe el número ya contado desde Resumen.
function TarjetaProceso({ numero }) {
  return (
    <div className="tarjeta-proceso">
      <Etiqueta />
      <Numero numero={numero} />
      <div className="tarjeta-proceso-barra"></div>
    </div>
  );
}

export default TarjetaProceso;
