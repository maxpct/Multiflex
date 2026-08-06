import './BarraLimpieza.css';

// Esta es la barra de Limpieza.
// Recibe cuántas solicitudes tiene y qué tan larga debe verse.
function BarraLimpieza({ numero, ancho }) {
  return (
    <div className="barra-fila">
      <span className="barra-nombre">Limpieza</span>

      <div className="barra-pista">
        {/* El ancho se pone aquí porque cambia según los datos */}
        <div className="barra-relleno" style={{ width: ancho }}></div>
      </div>

      <span className="barra-numero">{numero}</span>
    </div>
  );
}

export default BarraLimpieza;
