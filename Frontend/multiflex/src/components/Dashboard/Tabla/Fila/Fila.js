import './Fila.css';
import Estado from './Estado/Estado';
import BotonBorrar from './BotonBorrar/BotonBorrar';

// Esta es una sola fila de la tabla.
// Recibe una solicitud y muestra sus datos.
// También recibe "recargar" para volver a pedir la lista
// cuando se cambia el estado o se elimina la solicitud.
function Fila({ solicitud, recargar }) {

  // La fecha viene de MySQL con hora y todo, así que
  // nos quedamos solo con el día, el mes y el año.
  let fecha = '';

  if (solicitud.fecha_solicitud) {
    fecha = new Date(solicitud.fecha_solicitud).toLocaleDateString('es-MX');
  }

  return (
    <tr className="fila">

      {/* El folio es el id que le puso la base de datos */}
      <td className="fila-folio">#{solicitud.id_solicitud}</td>

      <td>{solicitud.cliente}</td>
      <td>{solicitud.telefono}</td>
      <td>{solicitud.servicio}</td>
      <td>{fecha}</td>

      {/* La lista para cambiar el estado (UPDATE) */}
      <td>
        <Estado
          id={solicitud.id_solicitud}
          estado={solicitud.estado}
          recargar={recargar}
        />
      </td>

      {/* El botón rojo para eliminar (DELETE) */}
      <td>
        <BotonBorrar
          id={solicitud.id_solicitud}
          cliente={solicitud.cliente}
          recargar={recargar}
        />
      </td>

    </tr>
  );
}

export default Fila;
