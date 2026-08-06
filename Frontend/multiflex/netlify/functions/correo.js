// =====================================================================
// FUNCIÓN DE NETLIFY PARA RESEND (cuando la página está publicada)
//
// Hace lo mismo que src/setupProxy.js pero en el servidor de Netlify:
// recibe los datos del correo, le agrega la llave secreta
// y le pide a Resend que lo mande.
// Así el navegador nunca ve la llave y no hay error de CORS.
// =====================================================================

exports.handler = async function (evento) {

  // La llave se guarda en Netlify (Environment variables).
  const llave = process.env.RESEND_API_KEY;

  if (!llave) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Falta la variable RESEND_API_KEY en Netlify' }),
    };
  }

  try {
    // Le mandamos a Resend lo mismo que nos llegó, más la llave.
    const respuesta = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + llave,
        'Content-Type': 'application/json',
      },
      body: evento.body,
    });

    const texto = await respuesta.text();

    return {
      statusCode: respuesta.status,
      headers: { 'Content-Type': 'application/json' },
      body: texto,
    };
  } catch (fallo) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'No se pudo conectar con Resend' }),
    };
  }
};
