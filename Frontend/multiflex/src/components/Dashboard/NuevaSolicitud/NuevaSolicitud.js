import { useState } from 'react';
import './NuevaSolicitud.css';
import Titulo from './Titulo/Titulo';
import Formulario from './Formulario/Formulario';

// Esta sección sirve para registrar una solicitud que llegó
// por teléfono o por WhatsApp, es decir, sin que el cliente
// entre a la página. Aquí se usa el CREATE de la base de datos.
function NuevaSolicitud({ recargar }) {

  // Este useState guarda si el formulario está abierto o cerrado.
  // Empieza cerrado para que el panel no se vea saturado.
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="nueva">

      <div className="nueva-barra">
        <Titulo />

        {/* Este botón abre y cierra el formulario */}
        <button
          className="nueva-boton"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? 'Cancelar' : '+ Registrar solicitud'}
        </button>
      </div>

      {/* El formulario solo se ve cuando está abierto */}
      {abierto && (
        <Formulario
          recargar={recargar}
          cerrar={() => setAbierto(false)}
        />
      )}

    </div>
  );
}

export default NuevaSolicitud;
