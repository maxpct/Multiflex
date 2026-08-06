import './Datos.css';

// Este componente muestra el folio, la fecha y el estado de la solicitud.
function Datos({ folio, fecha, estado }) {
  return (
    <div className="documento-datos">
      <span className="dato-folio">Folio: {folio}</span>
      <span className="dato-fecha">{fecha}</span>
      <span className="dato-estado">{estado}</span>
    </div>
  );
}

export default Datos;
