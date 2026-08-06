import './Contacto.css';
import Encabezado from './Encabezado/Encabezado';
import Formulario from './Formulario/Formulario';
import Informacion from './Informacion/Informacion';
import Imagen from './Imagen/Imagen';

// Página de contacto. Tiene la franja de arriba con la foto,
// el formulario del lado izquierdo y la tarjeta de contacto
// con su foto del lado derecho.
// Recibe "guardarPdf" desde App.js y se lo pasa al formulario,
// para que al enviarlo se guarde el PDF que genera PDFMonkey.
function Contacto({ guardarPdf, guardarSolicitud, cambiarPagina }) {
  return (
    <div className="contact-pagina" id="contacto">

      {/* La franja de arriba con la foto y el título */}
      <Encabezado />

      {/* Las tarjetas se montan un poco encima de la franja */}
      <div className="contact-cuerpo" id="formulario">
        <div className="contact-fila">

          {/* Del lado izquierdo el formulario */}
          <Formulario
            guardarPdf={guardarPdf}
            guardarSolicitud={guardarSolicitud}
            cambiarPagina={cambiarPagina}
          />

          {/* Del lado derecho la tarjeta de contacto y una foto */}
          <div className="contact-lado">
            <Informacion />
            <Imagen />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacto;
