import './Encabezado.css';

// Este componente muestra los títulos de las columnas de la tabla.
function Encabezado() {
  return (
    <thead className="encabezado">
      <tr>
        <th>Folio</th>
        <th>Cliente</th>
        <th>Teléfono</th>
        <th>Servicio</th>
        <th>Fecha</th>
        <th>Estado</th>
      </tr>
    </thead>
  );
}

export default Encabezado;
