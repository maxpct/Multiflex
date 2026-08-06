import './TarjetaTotal.css';
import Etiqueta from './Etiqueta/Etiqueta';
import Numero from './Numero/Numero';

// Esta tarjeta muestra el total de solicitudes.
// Recibe el número ya contado desde Resumen.
function TarjetaTotal({ numero }) {
  return (
    <div className="tarjeta-total">
      <Etiqueta />
      <Numero numero={numero} />
      <div className="tarjeta-total-barra"></div>
    </div>
  );
}

export default TarjetaTotal;
