import './Tabla.css';
import Encabezado from './Encabezado/Encabezado';
import Fila from './Fila/Fila';
import Vacia from './Vacia/Vacia';

// Esta es la tabla con la lista de solicitudes.
// Recibe las solicitudes que se deben mostrar (ya filtradas)
// y la función "recargar" para volver a pedirlas cuando algo cambia.
function Tabla({ solicitudes, recargar }) {

  // Si el filtro no encontró nada, mostramos un aviso.
  if (solicitudes.length === 0) {
    return <Vacia />;
  }

  // Aquí vamos a ir guardando una fila por cada solicitud.
  // Lo hacemos con un ciclo porque no sabemos cuántas van a llegar:
  // pueden ser 1 o pueden ser 50.
  const filas = [];

  for (let i = 0; i < solicitudes.length; i++) {

    // El "key" es un dato que React pide para no confundir las filas.
    // Usamos el id de la solicitud porque nunca se repite.
    filas[i] = (
      <Fila
        key={solicitudes[i].id_solicitud}
        solicitud={solicitudes[i]}
        recargar={recargar}
      />
    );
  }

  return (
    <div className="tabla-caja">
      <table className="tabla">

        {/* Los títulos de las columnas */}
        <Encabezado />

        {/* Las filas que acabamos de armar */}
        <tbody>{filas}</tbody>

      </table>
    </div>
  );
}

export default Tabla;
