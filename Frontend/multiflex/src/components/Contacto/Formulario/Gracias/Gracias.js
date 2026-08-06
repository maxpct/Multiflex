import './Gracias.css';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';
import Boton from './Boton/Boton';
import Aviso from '../Aviso/Aviso';

// Esta es la pantalla que aparece cuando ya se envió el formulario.
// Recibe el error (si hubo) y la función para cambiar de página.
function Gracias({ error, cambiarPagina }) {
  return (
    <div className="contact-formulario gracias-caja">
      <Titulo />
      <Texto />

      {/* Si hubo un problema, lo avisamos aquí. */}
      {error && <Aviso texto={error} />}

      {/* Si todo salió bien, mandamos al comprobante. */}
      {!error && <Boton cambiarPagina={cambiarPagina} />}
    </div>
  );
}

export default Gracias;
