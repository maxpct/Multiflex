// =====================================================================
// ARCHIVO QUE SE COMUNICA CON RESEND (API de correos)
//
// Sirve para que, cuando un cliente manda una solicitud,
// a Multiflex le llegue un correo con todos los datos
// y con el enlace del comprobante en PDF.
//
// Igual que con PDFMonkey, no le hablamos directo a la API
// porque el navegador lo bloquea (CORS) y porque la llave es
// secreta. Le hablamos a "/api/correo" y del otro lado hay
// un intermediario que sí puede llamarla:
//   - En la computadora:  src/setupProxy.js
//   - Ya publicado:       netlify/functions/correo.js
// =====================================================================

// Dirección de nuestro intermediario (no la de Resend).
const URL_API = '/api/correo';

// El correo al que le van a llegar las solicitudes.
// El valor sale del archivo .env
const PARA = process.env.REACT_APP_CORREO_MULTIFLEX;

// El correo desde el que se manda.
// Mientras no tengamos un dominio propio verificado en Resend,
// se usa el de pruebas que ellos dan.
const DE = 'Multiflex <onboarding@resend.dev>';


// Creamos y exportamos la función enviarCorreo.
// Recibe los datos del formulario y el comprobante que hizo PDFMonkey.
export async function enviarCorreo(datos, pdf) {

  // Si no hay correo configurado, no tiene caso intentar.
  if (!PARA) {
    throw new Error('Falta el correo de Multiflex en el archivo .env');
  }

  // Aquí armamos el contenido del correo con HTML,
  // para que se vea ordenado y no como texto suelto.
  const contenido =
    '<div style="font-family: Segoe UI, Arial, sans-serif; color:#1A1D20;">' +
      '<h2 style="color:#007BFF; margin-bottom:4px;">Nueva solicitud de servicio</h2>' +
      '<p style="margin:0 0 18px; color:#6c757d;">Folio: <strong>' + pdf.folio + '</strong></p>' +

      '<p><strong>Cliente:</strong> ' + datos.nombre + '</p>' +
      '<p><strong>Teléfono:</strong> ' + datos.telefono + '</p>' +
      '<p><strong>Correo:</strong> ' + datos.correo + '</p>' +
      '<p><strong>Servicio:</strong> ' + datos.servicio + '</p>' +
      '<p><strong>Colonia:</strong> ' + datos.colonia + '</p>' +
      '<p><strong>Descripción:</strong> ' + datos.mensaje + '</p>' +
      '<p><strong>Fecha:</strong> ' + pdf.fecha + '</p>' +
      '<p><strong>Estado:</strong> ' + pdf.estado + '</p>' +

      // Aquí ponemos el enlace del PDF que generó PDFMonkey.
      '<p style="margin-top:22px;">' +
        '<a href="' + pdf.bajarlo + '" ' +
        'style="background:#007BFF; color:#fff; padding:12px 22px; ' +
        'border-radius:8px; text-decoration:none; font-weight:600;">' +
        'Ver el comprobante en PDF</a>' +
      '</p>' +

      '<p style="margin-top:28px; font-size:12px; color:#6c757d;">' +
        'Este correo se envió automáticamente desde el sitio web de Multiflex.' +
      '</p>' +
    '</div>';

  // Le pedimos a Resend (a través del intermediario) que mande el correo.
  const respuesta = await fetch(URL_API, {

    // POST porque le estamos mandando información.
    method: 'POST',

    // Avisamos que la información va en formato JSON.
    headers: { 'Content-Type': 'application/json' },

    // Estos son los datos que Resend necesita para mandar el correo.
    body: JSON.stringify({
      from: DE,
      to: PARA,
      subject: 'Nueva solicitud ' + pdf.folio + ' - ' + datos.servicio,
      html: contenido,
    }),
  });

  // Si Resend contestó con un error, avisamos qué pasó.
  if (!respuesta.ok) {

    // 401 o 403 quiere decir que la llave está mal.
    if (respuesta.status === 401 || respuesta.status === 403) {
      throw new Error('La llave de Resend no es válida.');
    }

    throw new Error('No se pudo enviar el correo (error ' + respuesta.status + ').');
  }

  // Si todo salió bien, regresamos true.
  return true;
}
