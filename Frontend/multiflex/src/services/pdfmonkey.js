// =====================================================================
// ARCHIVO QUE SE COMUNICA CON PDFMONKEY
//
// Aquí está todo lo que tiene que ver con generar el PDF.
// Lo separamos en su propio archivo para que los componentes
// no tengan que saber cómo funciona la API por dentro.
// =====================================================================

// Esta es la dirección a la que le pedimos el PDF.
// No le hablamos directo a api.pdfmonkey.io porque el navegador
// no lo permite por seguridad (sale el error de CORS).
// En vez de eso le hablamos a nuestra propia página ("/api/pdfmonkey")
// y del otro lado hay un intermediario que sí puede llamar a PDFMonkey:
//   - En la computadora:  src/setupProxy.js
//   - Ya publicado:       netlify/functions/pdfmonkey.js
const URL_API = '/api/pdfmonkey';

// Aquí guardamos el ID de la plantilla que hicimos en PDFMonkey.
// El valor sale del archivo .env
// No es un dato secreto, por eso sí puede estar en el navegador.
const PLANTILLA = process.env.REACT_APP_PDFMONKEY_TEMPLATE_ID;


// Creamos y exportamos una función llamada crearFolio
// export permite que podamos utilizar esta función
// desde otros archivos de nuestro proyecto.
export function crearFolio() {

  // Creamos una variable llamada hoy
  // donde guardamos la fecha y hora actual del sistema.
  const hoy = new Date();

  // Obtenemos solamente el año de la fecha actual.
  // getFullYear() devuelve el año completo.
  const anio = hoy.getFullYear();

  // Obtenemos el mes actual.
  // JavaScript empieza a contar los meses desde 0
  // String() convierte el número a texto.
  // padStart(2, '0') agrega un cero si el número tiene
  // solamente una cifra
  // Esto ayuda a que la fecha siempre tenga dos números.
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');

  // Obtenemos el día actual.
  // getDate() devuelve el día del mes.
  const dia = String(hoy.getDate()).padStart(2, '0');

  // Creamos un número aleatorio de 4 cifras.
  // Math.random()
  // genera un número aleatorio entre 0 y 1.
  // Ejemplo:
  // Math.floor()
  // elimina los decimales:
  // Finalmente sumamos 1000 para asegurar
  // que siempre sea un número de 4 cifras.

  const azar = Math.floor(Math.random() * 9000) + 1000;

  // Construimos el folio final uniendo todos los datos
  return 'MF-' + anio + mes + dia + '-' + azar;
}


// Creamos y exportamos una función llamada fechaDeHoy
// Sirve para escribir la fecha de forma que se entienda
// dentro del PDF, por ejemplo: 27/07/2026 20:15
export function fechaDeHoy() {

  // Otra vez guardamos la fecha y hora actual del sistema.
  const hoy = new Date();

  // Sacamos el día, el mes y el año por separado.
  // Usamos padStart(2, '0') para que siempre se vean
  // con dos números (por ejemplo 07 en lugar de 7).
  const dia = String(hoy.getDate()).padStart(2, '0');
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const anio = hoy.getFullYear();

  // Ahora sacamos la hora y los minutos.
  // getHours() devuelve la hora y getMinutes() los minutos.
  const hora = String(hoy.getHours()).padStart(2, '0');
  const minuto = String(hoy.getMinutes()).padStart(2, '0');

  // Unimos todo para que quede como: 27/07/2026 20:15
  return dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minuto;
}


// Creamos una función llamada esperarPdf
// Esta NO lleva export porque solo se usa dentro de este archivo.
//
// PDFMonkey no entrega el PDF al instante: primero lo apunta
// y después lo construye. Por eso esta función le pregunta
// cada 2 segundos "¿ya quedó?" hasta que esté listo.
//
// async significa que la función tiene que esperar cosas
// que tardan (como pedir información por internet).
async function esperarPdf(id) {

  // Con esta variable contamos cuántas veces hemos preguntado.
  let intento = 0;

  // Mientras no lleguemos a 20 intentos, seguimos preguntando.
  // Son 20 intentos de 2 segundos, o sea 40 segundos como máximo.
  while (intento < 20) {

    // Aquí esperamos 2 segundos antes de volver a preguntar.
    // await hace que el programa se detenga hasta que termine.
    await new Promise((ok) => setTimeout(ok, 2000));

    // Le preguntamos a PDFMonkey cómo va el documento.
    // Le mandamos el id para que sepa cuál es.
    const respuesta = await fetch(URL_API + '/document_cards/' + id);

    // Si nos contestó bien, revisamos qué dijo.
    if (respuesta.ok) {

      // json() convierte la respuesta en algo que JavaScript entiende.
      const info = await respuesta.json();

      // PDFMonkey puede llamarle de distintas formas al documento,
      // así que revisamos las tres posibilidades.
      const doc = info.document_card || info.document || info;

      // Si el estado dice "success" es que el PDF ya quedó.
      if (doc && doc.status === 'success') {

        // Regresamos los dos enlaces: uno para verlo y otro para bajarlo.
        return {
          verlo: doc.preview_url || doc.download_url,
          bajarlo: doc.download_url || doc.preview_url,
        };
      }

      // Si dice "failure" es que algo salió mal con la plantilla.
      if (doc && doc.status === 'failure') {
        throw new Error('PDFMonkey no pudo generar el documento. Revisa tu plantilla.');
      }
    }

    // Sumamos un intento y volvemos a preguntar.
    intento = intento + 1;
  }

  // Si se acabaron los 20 intentos y nunca quedó, avisamos.
  throw new Error('El PDF está tardando demasiado. Vuelve a intentarlo.');
}


// Creamos y exportamos la función principal: generarPdf
// Esta es la que llama el formulario cuando se presiona Enviar.
// Recibe los datos que escribió el usuario.
export async function generarPdf(datos) {

  // Primero revisamos que sí tengamos el ID de la plantilla.
  // Si no lo tenemos, ni caso tiene seguir.
  if (!PLANTILLA) {
    throw new Error('Falta el ID de la plantilla en el archivo .env');
  }

  // Usamos las funciones que hicimos arriba para el folio y la fecha.
  const folio = crearFolio();
  const fecha = fechaDeHoy();

  // Todas las solicitudes empiezan con este estado.
  const estado = 'Solicitud recibida';

  // Armamos la dirección del logo.
  // window.location.origin es la dirección de nuestra página,
  // por ejemplo https://multiflex-ags.netlify.app
  const logo = window.location.origin + '/logo.png';

  // Aquí juntamos toda la información que va a salir en el PDF.
  // Los nombres (folio, nombre, telefono...) tienen que ser
  // los mismos que pusimos en la plantilla de PDFMonkey.
  const contenido = {
    logo: logo,
    folio: folio,
    nombre: datos.nombre,
    telefono: datos.telefono,
    correo: datos.correo,
    servicio: datos.servicio,
    colonia: datos.colonia,
    descripcion: datos.mensaje,
    fecha: fecha,
    estado: estado,
  };

  // PASO 1: le pedimos a PDFMonkey que apunte el documento.
  // Esto contesta rapidísimo porque todavía no lo construye.
  //
  // Nota: antes usábamos "/documents/sync", que espera hasta que
  // el PDF esté listo, pero Netlify corta las funciones a los
  // 10 segundos y se perdía la respuesta. Por eso son dos pasos.
  const respuesta = await fetch(URL_API + '/documents', {

    // method dice qué tipo de petición es.
    // POST se usa cuando le mandamos información al servidor.
    method: 'POST',

    // Aquí avisamos que le mandamos la información en formato JSON.
    headers: { 'Content-Type': 'application/json' },

    // body es la información que le mandamos.
    // JSON.stringify convierte nuestro objeto a texto.
    body: JSON.stringify({
      document: {
        document_template_id: PLANTILLA,
        status: 'pending',
        payload: contenido,
        meta: { _filename: 'Solicitud-' + folio + '.pdf' },
      },
    }),
  });

  // Si PDFMonkey nos contestó con un error, avisamos qué pasó.
  if (!respuesta.ok) {

    // 401 significa que la llave está mal.
    if (respuesta.status === 401) {
      throw new Error('La llave de PDFMonkey no es válida.');
    }

    // 404 significa que no encontró la plantilla.
    if (respuesta.status === 404) {
      throw new Error('No se encontró la plantilla. Revisa el ID.');
    }

    // Cualquier otro error.
    throw new Error('No pudimos generar el comprobante (error ' + respuesta.status + ').');
  }

  // Convertimos la respuesta para poder usarla.
  const info = await respuesta.json();

  // PDFMonkey nos regresa el documento adentro de "document".
  const doc = info.document || info;

  // Necesitamos el id para poder preguntar después si ya quedó.
  if (!doc || !doc.id) {
    throw new Error('PDFMonkey no devolvió el documento. Intenta de nuevo.');
  }

  // Guardamos los enlaces por si de casualidad ya vinieron listos.
  let enlaces = {
    verlo: doc.preview_url || doc.download_url,
    bajarlo: doc.download_url || doc.preview_url,
  };

  // PASO 2: si todavía no hay enlace, esperamos a que el PDF quede.
  if (!enlaces.verlo) {
    enlaces = await esperarPdf(doc.id);
  }

  // Regresamos toda la información que necesita la sección Comprobante
  // para mostrar el folio, la fecha, el estado y el PDF.
  return {
    folio: folio,
    fecha: fecha,
    estado: estado,
    nombre: datos.nombre,
    servicio: datos.servicio,
    verlo: enlaces.verlo,
    bajarlo: enlaces.bajarlo,
  };
}
