// Importamos useState para saber si ya se envió y si algo falló.
import { useState } from 'react';
import './Formulario.css';
import { createRequest } from '../../../services/api';

// Cada campo del formulario es su propio componente.
// Son HTML normal: no les mandamos nada, solo los acomodamos aquí.
import CampoNombre from './CampoNombre/CampoNombre';
import CampoTelefono from './CampoTelefono/CampoTelefono';
import CampoCorreo from './CampoCorreo/CampoCorreo';
import CampoServicio from './CampoServicio/CampoServicio';
import CampoColonia from './CampoColonia/CampoColonia';
import CampoProblema from './CampoProblema/CampoProblema';
import BotonEnviar from './BotonEnviar/BotonEnviar';  
import Nota from './Nota/Nota';
import Cargando from './Cargando/Cargando';
import Gracias from './Gracias/Gracias';

// ===== PDFMONKEY: aquí traemos la función que genera el PDF =====
import { generarPdf } from '../../../services/pdfmonkey';

// ===== RESEND: aquí traemos la función que manda el correo =====
import { enviarCorreo } from '../../../services/correo';

function Formulario({ guardarPdf, guardarSolicitud, cambiarPagina }) {

  alert("ESTE ES EL FORMULARIO NUEVO");
  // Esta variable nos dice si el formulario ya fue enviado.
  // Empieza en false porque todavía no se ha enviado.
  const [enviado, setEnviado] = useState(false);

  // ===== PDFMONKEY: este useState nos dice si el PDF se está generando. =====
  const [generando, setGenerando] = useState(false);

  // ===== PDFMONKEY: aquí guardamos el mensaje si algo sale mal. =====
  const [error, setError] = useState('');

  // Esta función se ejecuta cuando se presiona el botón Enviar.
  async function manejarEnvio(e) {

    // Evita que la página se recargue.
    e.preventDefault();

    // Aquí "e.target" es el formulario completo.
    // Como cada campo tiene su name, podemos sacar lo que
    // el usuario escribió directamente del formulario.
    const formulario = e.target;

    const datos = {
      nombre: formulario.nombre.value,
      telefono: formulario.telefono.value,
      correo: formulario.correo.value,
      servicio: formulario.servicio.value,
      colonia: formulario.colonia.value,
      mensaje: formulario.mensaje.value,
    };

    // Limpiamos el mensaje de error anterior y avisamos que ya empezamos.
    setError('');
    setGenerando(true);

    try {
        await createRequest(datos);
    } catch (error) {
        console.error('Error al crear la solicitud:', error);
        setGenerando(false);
        setError("No pudimos registrar tu solicitud, intenta nuevamente.");
        return;
    }

    // ===== PDFMONKEY: pedimos el PDF con los datos del formulario. =====
    try {
      console.log('ENTRANDO A PDFMONKEY');
      const pdf = await generarPdf(datos);
      console.log(pdf);

      // Guardamos el PDF para que la sección Documento lo pueda mostrar.
      guardarPdf(pdf);

      // ===== DASHBOARD: guardamos la solicitud para que salga en el panel.
      guardarSolicitud({
        folio: pdf.folio,
        cliente: datos.nombre,
        telefono: datos.telefono,
        servicio: datos.servicio,
        fecha: pdf.fecha,
        estado: 'Pendiente',
      });

      // ===== RESEND: ya con el PDF listo, le mandamos el correo a Multiflex.
      // Va en su propio try porque si el correo falla, el comprobante
      // igual se generó bien y no queremos perderlo.
      try {
        await enviarCorreo(datos, pdf);
      } catch (falloCorreo) {
        setError('Tu comprobante se generó, pero no pudimos enviar el correo de aviso. ' + falloCorreo.message);
      }

    } catch (fallo) {
      // Si algo sale mal, mostramos un mensaje amable
      // pero NO rompemos el formulario: la solicitud igual se envía.
      setError('Tu solicitud se envió, pero no pudimos generar el comprobante en PDF. ' + fallo.message);
    }

    setGenerando(false);

    // Cambiamos el estado a true para mostrar el mensaje de gracias.
    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
      cambiarPagina('comprobante');
    }, 2500);

  }

  // Si el formulario ya fue enviado, mostramos solo el mensaje de gracias.
  if (enviado) {
    return <Gracias error={error} cambiarPagina={cambiarPagina} />;
  }

  // Si todavía no se envía, mostramos el formulario.
  return (

    // onSubmit llama a manejarEnvio cuando se presiona el botón.
    <form className="contact-formulario" onSubmit={manejarEnvio}>

      {/* Primera fila: tres campos cortos */}
      <div className="contact-fila-tres">
        <CampoNombre />
        <CampoTelefono />
        <CampoCorreo />
      </div>

      {/* Segunda fila: el servicio y la colonia */}
      <div className="contact-fila-dos">
        <CampoServicio />
        <CampoColonia />
      </div>

      {/* La descripción va sola porque es más grande */}
      <CampoProblema />

      {/* El botón que envía todo */}
      <BotonEnviar />

      {/* ===== PDFMONKEY: aviso mientras se genera el PDF. ===== */}
      {generando && <Cargando />}

      {/* El avisito de que los datos están protegidos */}
      <Nota />

    </form>

  );
}

export default Formulario;
