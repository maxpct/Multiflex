import './TarjetaTerminadas.css';
import Etiqueta from './Etiqueta/Etiqueta';
import Numero from './Numero/Numero';

// Esta tarjeta muestra las solicitudes terminadas.
// Recibe el número ya contado desde Resumen.
function TarjetaTerminadas({ numero }) {
  return (
    <div className="tarjeta-terminadas">
      <Etiqueta />
      <Numero numero={numero} />
      <div className="tarjeta-terminadas-barra"></div>
    </div>
  );
}

export default TarjetaTerminadas;
