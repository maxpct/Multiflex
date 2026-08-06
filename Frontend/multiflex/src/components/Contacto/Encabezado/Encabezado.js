import './Encabezado.css';
import Fondo from './Fondo/Fondo';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';
import Boton from './Boton/Boton';

// Esta es la franja de arriba de la página de contacto:
// una foto de fondo con el título y el subtítulo encima.
function Encabezado() {
  return (
    <div className="contact-encabezado">

      {/* La foto de fondo */}
      <Fondo />

      {/* La capa oscura para que se lea el texto */}
      <div className="contact-capa"></div>

      {/* El título y el subtítulo van encima de la capa */}
      <div className="contact-encabezado-texto">
        <Titulo />
        <Texto />
        <Boton />
      </div>
    </div>
  );
}

export default Encabezado;
