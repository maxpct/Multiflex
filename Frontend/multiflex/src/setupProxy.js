// INTERMEDIARIOS PARA LAS APIS (solo cuando trabajamos con npm start)
//
// El navegador NO puede llamar directo a PDFMonkey ni a Resend
// por seguridad (sale el error de CORS), y tampoco queremos que las
// llaves secretas lleguen al navegador.
//
// Por eso la página le habla a "/api/pdfmonkey" y a "/api/correo"
// (que es su misma dirección) y este archivo, que corre en la
// computadora y no en el navegador, reenvía las peticiones
// agregándoles la llave secreta.


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

  app.use(
    '/api/pdfmonkey',
    createProxyMiddleware({
      // A dónde se reenvía la petición.
      target: 'https://api.pdfmonkey.io',
      changeOrigin: true,

      // Cambiamos "/api/pdfmonkey/..." por "/api/v1/..." (lo que espera PDFMonkey).
      pathRewrite: { '^/api/pdfmonkey': '/api/v1' },

      // Aquí le pegamos la llave secreta antes de enviarla.
      onProxyReq: function (peticion) {
        const llave = process.env.PDFMONKEY_API_KEY;

        if (llave) {
          peticion.setHeader('Authorization', 'Bearer ' + llave);
        }
      },
    })
  );

  app.use(
    '/api/correo',
    createProxyMiddleware({
      // A dónde se reenvía la petición.
      target: 'https://api.resend.com',
      changeOrigin: true,

      // Cambiamos "/api/correo" por "/emails" (lo que espera Resend).
      pathRewrite: { '^/api/correo': '/emails' },

      // Aquí le pegamos la llave secreta antes de enviarla.
      onProxyReq: function (peticion) {
        const llave = process.env.RESEND_API_KEY;

        if (llave) {
          peticion.setHeader('Authorization', 'Bearer ' + llave);
        }
      },
    })
  );
};
