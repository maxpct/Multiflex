// =====================================================================
// ARCHIVO DE LAS SOLICITUDES DEL DASHBOARD
//
// Aquí están las funciones que cuentan y filtran las solicitudes.
// Las ponemos aquí para que los componentes queden bien sencillos:
// ellos nada más piden el resultado y lo muestran.
//
// Por ahora las solicitudes se guardan en App.js: cada vez que alguien
// llena el formulario, se agrega una nueva y aparece en el dashboard.
// (Al recargar la página se borran, porque todavía no hay base de datos.)
// =====================================================================


// Esta función cuenta cuántas solicitudes hay de un estado.
// La usamos para las tarjetas de arriba del dashboard.
export function contarPorEstado(lista, estado) {

  // Empezamos la cuenta en cero.
  let cuenta = 0;

  // Recorremos la lista de una por una.
  for (let i = 0; i < lista.length; i++) {

    // Si esta solicitud tiene el estado que buscamos, sumamos uno.
    if (lista[i].estado === estado) {
      cuenta = cuenta + 1;
    }
  }

  return cuenta;
}


// Esta función cuenta cuántas solicitudes hay de un servicio.
// La usamos para la gráfica de barras.
export function contarPorServicio(lista, servicio) {

  let cuenta = 0;

  for (let i = 0; i < lista.length; i++) {

    if (lista[i].servicio === servicio) {
      cuenta = cuenta + 1;
    }
  }

  return cuenta;
}


// Esta función arma una lista nueva solo con las solicitudes
// que tienen el estado que se pide.
// Si el estado es 'Todas', regresa la lista completa.
export function filtrarPorEstado(lista, estado) {

  // Si quieren ver todas, no hay nada que filtrar.
  if (estado === 'Todas') {
    return lista;
  }

  // Aquí vamos a ir guardando las que sí sirven.
  const resultado = [];

  for (let i = 0; i < lista.length; i++) {

    if (lista[i].estado === estado) {
      resultado[resultado.length] = lista[i];
    }
  }

  return resultado;
}


// Esta función busca cuál servicio tiene más solicitudes.
// Nos sirve para que esa barra sea la más larga de la gráfica.
export function mayorDeServicios(lista) {

  // Los seis servicios que ofrece Multiflex.
  const servicios = ['Plomería', 'Electricidad', 'Pintura', 'Impermeabilización', 'Limpieza', 'Jardinería'];

  let mayor = 0;

  for (let i = 0; i < servicios.length; i++) {

    // Contamos cuántas tiene este servicio.
    const cuenta = contarPorServicio(lista, servicios[i]);

    // Si es más que el mayor que teníamos, ahora este es el mayor.
    if (cuenta > mayor) {
      mayor = cuenta;
    }
  }

  return mayor;
}


// Esta función dice qué tan larga debe verse una barra.
// Si el mayor es 4 y el número es 2, la barra mide el 50%.
export function anchoDeBarra(numero, mayor) {

  // Si todavía no hay nada, la barra mide cero.
  if (mayor === 0) {
    return '0%';
  }

  return (numero / mayor) * 100 + '%';
}


// ---------------------------------------------------------------------
// PARA CUANDO EXISTA LA BASE DE DATOS
//
// Este es el endpoint que va a entregar las solicitudes guardadas.
// const URL_API = '/api/solicitudes';
//
// export async function obtenerSolicitudes() {
//   const respuesta = await fetch(URL_API);
//
//   if (!respuesta.ok) {
//     throw new Error('No se pudieron cargar las solicitudes.');
//   }
//
//   return await respuesta.json();
// }
// ---------------------------------------------------------------------
