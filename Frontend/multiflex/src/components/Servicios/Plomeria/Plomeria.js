import { useState } from 'react';
import './Plomeria.css';
import Card from './Card/Card';
import Imagen from './Imagen/Imagen';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';

// Servicio de Plomería. Tiene la tarjeta y la vista completa.
function Plomeria() {
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
              <li> Reparación de fugas</li>
              <li> Instalación de muebles de baño</li>
              <li> Mantenimiento de calentadores</li>
              <li> Destape de drenajes</li>
            </ul>

            <span className="detalle-precio">Desde $350 MXN</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Plomeria;
