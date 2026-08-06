import './Documento.css';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';
import Datos from './Datos/Datos';
import Visor from './Visor/Visor';
import BotonVer from './BotonVer/BotonVer';
import BotonDescargar from './BotonDescargar/BotonDescargar';
import Vacio from './Vacio/Vacio';
import Pasos from './Pasos/Pasos';
import Hero from './Hero/Hero';

// ===== SECCIÓN DE PDFMONKEY =====
// Aquí se muestra el comprobante en PDF que genera la API de PDFMonkey.
// Recibe "pdf" desde App.js (ahí se guarda cuando se envía el formulario).
function Documento({ pdf, cambiarPagina }) {
  return (
    <div className="documento" id="documento">

      {/* El título y el texto van al mismo ancho que las demás secciones */}
      <Hero />
      <div className="documento-encabezado">
        <Titulo />
        <Texto />
      </div>

      {/* Si todavía no hay PDF, mostramos un aviso. */}
      {!pdf && <Vacio cambiarPagina={cambiarPagina} />}

      {/* Si ya hay PDF, mostramos los datos, los botones y el visor grande. */}
      {pdf && (
        <div className="documento-listo">
          <div className="documento-encabezado">
            <Datos folio={pdf.folio} fecha={pdf.fecha} estado={pdf.estado} />

            <div className="documento-botones">
              <BotonVer enlace={pdf.verlo} />
              <BotonDescargar enlace={pdf.bajarlo} />
            </div>
          </div>

          {/* El visor ocupa todo el ancho de la pantalla */}
          <Visor enlace={pdf.verlo} />
        </div>
      )}

      {/* Los tres pasos que explican cómo funciona */}
      <Pasos />

    </div>
  );
}

export default Documento;
