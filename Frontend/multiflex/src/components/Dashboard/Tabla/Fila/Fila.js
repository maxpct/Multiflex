import './Fila.css';
import Estado from './Estado/Estado';

// Esta es una sola fila de la tabla.
// Recibe una solicitud y muestra sus datos.
function Fila({ solicitud }) {
  return (
    <tr className="fila">
      <td className="fila-folio">{solicitud.folio}</td>
      <td>{solicitud.cliente}</td>
      <td>{solicitud.telefono}</td>
      <td>{solicitud.servicio}</td>
      <td>{solicitud.fecha}</td>

      {/* La etiqueta de color la arma su propio componente */}
      <td><Estado estado={solicitud.estado} /></td>
    </tr>
  );
}

export default Fila;
