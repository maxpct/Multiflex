// Importamos useState para poder guardar información dentro del componente.
import { useState } from 'react';

// Importamos el archivo de estilos.
import './Electricidad.css';

// Importamos las partes que forman la tarjeta.
import Card from './Card/Card';
import Imagen from './Imagen/Imagen';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';

// Componente del servicio de Electricidad.
function Electricidad() {

  // Esta variable dice si la información completa está abierta o cerrada.
  // Empieza en false porque al iniciar la página no se muestra el detalle.
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="servicio">

      {/* Este div contiene la tarjeta.
          Cuando el usuario hace clic, cambiamos "abierto" a true
          para mostrar la información completa. */}
      <div
        className="card-clic"
        onClick={() => setAbierto(true)}
      >
        <Card />
      </div>

      {/* El && significa "y".
          Si "abierto" es true, React muestra todo este bloque.
          Si "abierto" es false, no muestra nada. */}
      {abierto && (

        <div className="detalle">

          {/* Caja donde aparece toda la información del servicio. */}
          <div className="detalle-caja">

            {/* Este botón cierra la información.
                Cambiamos "abierto" a false para ocultarla. */}
            <button
              className="volver"
              onClick={() => setAbierto(false)}
            >
              ← Volver a servicios
            </button>

            <Imagen />
            <Titulo />
            <Texto />

            <h3 className="incluye-titulo">
              ¿Qué incluye?
            </h3>

            <ul className="incluye-lista">
              <li>Reparación de cortos circuitos</li>
              <li>Instalación de contactos y apagadores</li>
              <li>Colocación de lámparas</li>
              <li>Revisión de cableado</li>
            </ul>

            <span className="detalle-precio">
              Desde $400 MXN
            </span>

          </div>

        </div>

      )}

    </div>
  );
}

export default Electricidad;