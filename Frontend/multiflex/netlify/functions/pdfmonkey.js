// =====================================================================
// FUNCIÓN DE NETLIFY PARA PDFMONKEY (cuando la página está hosteada)
//
// Hace lo mismo que src/setupProxy.js pero en el servidor de Netlify:
// recibe la petición de la página, le agrega la llave secreta
// y se la manda a PDFMonkey. Así el navegador nunca ve la llave
// y tampoco hay error de CORS.
// =====================================================================

exports.handler = async function (evento) {
  // La llave se guarda en Netlify (Site settings -> Environment variables).
  const llave = process.env.PDFMONKEY_API_KEY;

  if (!llave) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Falta la variable PDFMONKEY_API_KEY en Netlify' }),
    };
  }

  // Sacamos la parte final de la dirección, por ejemplo "documents/sync".
  let ruta = evento.path;

  if (ruta.includes('/api/pdfmonkey/')) {
    ruta = ruta.split('/api/pdfmonkey/')[1];
  } else if (ruta.includes('/functions/pdfmonkey/')) {
    ruta = ruta.split('/functions/pdfmonkey/')[1];
  } else {
    ruta = '';
  }

  try {
    const respuesta = await fetch('https://api.pdfmonkey.io/api/v1/' + ruta, {
      method: evento.httpMethod,
      headers: {
        Authorization: 'Bearer ' + llave,
        'Content-Type': 'application/json',
      },
      body: evento.httpMethod === 'GET' ? undefined : evento.body,
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
      body: JSON.stringify({ error: 'No se pudo conectar con PDFMonkey' }),
    };
  }
};
