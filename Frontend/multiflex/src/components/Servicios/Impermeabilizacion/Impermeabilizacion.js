import { useState } from 'react';
import './Impermeabilizacion.css';
import Card from './Card/Card';
import Imagen from './Imagen/Imagen';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';

// Servicio de Impermeabilización. Tiene la tarjeta y la vista completa.
function Impermeabilizacion() {
  // Este useState guarda si la tarjeta está abierta (mostrando el detalle) o no.
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="servicio">
      {/* Al hacer clic en la tarjeta, abrimos la vista completa. */}
      <div className="card-clic" onClick={() => setAbierto(true)}>
        <Card />
      </div>

      {/* Si "abierto" es verdadero, mostramos la vista completa del servicio. */}
      {abierto && (
        <div className="detalle">
          <div className="detalle-caja">
            {/* Al hacer clic en Volver, cerramos la vista. */}
            <button className="volver" onClick={() => setAbierto(false)}>← Volver a servicios</button>

            <Imagen />
            <Titulo />
            <Texto />

            <h3 className="incluye-titulo">¿Qué incluye?</h3>
            <ul className="incluye-lista">
              <li> Limpieza de la superficie</li>
              <li> Sellado de fisuras</li>
              <li> Aplicación de impermeabilizante</li>
              <li> Mantenimiento anual</li>
            </ul>

            <span className="detalle-precio">Desde $80 MXN/m²</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Impermeabilizacion;
