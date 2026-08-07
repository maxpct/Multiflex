import './Barra.css';

// Esta es la barra de un servicio.
// Recibe el nombre, cuántas solicitudes tiene y qué tan larga se ve.
function Barra({ nombre, numero, ancho }) {
  return (
    <div className="est-fila">

      <span className="est-nombre">{nombre}</span>

      <div className="est-pista">
        {/* El ancho se pone aquí porque cambia según los datos */}
        <div className="est-relleno" style={{ width: ancho }}></div>
      </div>

      <span className="est-numero">{numero}</span>

    </div>
  );
}

export default Barra;
