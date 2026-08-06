import './TarjetaPendientes.css';
import Etiqueta from './Etiqueta/Etiqueta';
import Numero from './Numero/Numero';

// Esta tarjeta muestra las solicitudes pendientes.
// Recibe el número ya contado desde Resumen.
function TarjetaPendientes({ numero }) {
  return (
    <div className="tarjeta-pendientes">
      <Etiqueta />
      <Numero numero={numero} />
      <div className="tarjeta-pendientes-barra"></div>
    </div>
  );
}

export default TarjetaPendientes;
