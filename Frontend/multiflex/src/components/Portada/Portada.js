import './Portada.css';
import Imagen from './Imagen/Imagen';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';
import Boton from './Boton/Boton';

// Este es el hero: la parte grande de arriba que cubre toda la pantalla.
// Recibe cambiarPagina para que el botón lleve a la subpágina de contacto.
function Portada({ cambiarPagina }) {
  return (
    <div className="portada" id="inicio">

      {/* La imagen de fondo del hero */}
      <Imagen />

      {/* Esta capa oscura va encima de la imagen para que el texto se lea bien */}
      <div className="portada-capa"></div>

      {/* El texto del hero. Tiene el mismo ancho que las demás secciones */}
      <div className="portada-contenido">
        <Titulo />
        <Texto />
        <Boton cambiarPagina={cambiarPagina} />
      </div>
    </div>
  );
}

export default Portada;
