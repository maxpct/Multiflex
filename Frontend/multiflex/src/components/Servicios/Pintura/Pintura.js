import { useState } from 'react';
import './Pintura.css';
import Card from './Card/Card';
import Imagen from './Imagen/Imagen';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';

// Servicio de Pintura. Tiene la tarjeta y la vista completa.
function Pintura() {
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
              <li> Resane de grietas</li>
              <li> Pintura de interiores</li>
              <li> Pintura de exteriores</li>
              <li> Acabados</li>
            </ul>

            <span className="detalle-precio">Desde $50 MXN/m²</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pintura;
