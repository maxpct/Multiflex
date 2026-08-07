// Guardamos la URL base de nuestra API.
// La dirección viene del archivo .env, en la variable REACT_APP_API_URL.
// Si no estuviera puesta, usamos la de Render para que el sitio no se caiga.
const API_URL = process.env.REACT_APP_API_URL || 'https://multiflex-tak3.onrender.com/api';

// Exportamos la función para poder utilizarla en otros archivos
// async significa que esta función hará una petición y tendrá que esperar
// una respuesta del servidor.
export const getServices = async () => {

    // fetch() sirve para hacer una petición al backend.
    // Aquí estamos diciendo:
    const response = await fetch(`${API_URL}/services`);

    // Revisamos si la respuesta del servidor fue correcta.
    // response.ok será true si todo salió bien
    // Entonces:
    // !response.ok = "si NO salió bien"
    if (!response.ok) {

        // Si ocurrió un error detenemos la función
        // y mostramos un mensaje indicando qué falló.
        throw new Error("Failed to fetch services");
    }

    // Convertimos la respuesta del servidor a formato JSON.
    // El backend manda información como texto JSON
    return await response.json();
};

// Esta función recibe un parámetro llamado "id"
// que sirve para indicar qué servicio queremos buscar.
export const getServiceById = async (id) => {

    // Hacemos una petición al backend enviando el ID.
    // Si id vale 3, la URL quedaría:
    const response = await fetch(`${API_URL}/services/${id}`);


    // Verificamos si el servicio existe.
    // Si el backend responde con error, entramos aquí.
    if (!response.ok) {

        // Mandamos un mensaje indicando que no se encontró.
        throw new Error("Service not found");
    }



    // Convertimos la respuesta del servidor a JSON
    // para poder utilizar los datos dentro de React.
    return await response.json();
};

// Esta función sirve para enviar información nueva al backend.
// Ejemplo:
// Un cliente llena un formulario:
// Nombre: Juan
// Servicio: Pintura
// Fecha: 28/07/2026
// Toda esa información llega dentro de requestData.
export const createRequest = async (requestData) => {


    // Realizamos una petición al endpoint /requests
    // ahora estamos enviando datos para crear una solicitud nueva.
    const response = await fetch(`${API_URL}/requests`, {


        // Indicamos que la petición será POST.
        // GET = pedir información
        // POST = enviar o crear información nueva
        method: "POST",


        // Indicamos que los datos que enviaremos estarán
        // en formato JSON.
        // Esto le avisa al backend cómo debe interpretar
        // la información recibida.
        headers: {
            "Content-Type": "application/json"
        },

        // Convertimos nuestro objeto JavaScript a JSON.
        // HTTP necesita enviar la información como texto.
        body: JSON.stringify(requestData)
    });


    // Revisamos si el servidor creó correctamente
    // la solicitud.
    if (!response.ok) {

        // Si algo falló mostramos un error.
        throw new Error("Failed to create request");
    }

    // Devolvemos la respuesta del backend.
    // React podrá utilizar esta información después.
    return await response.json();
};

// Esta función obtiene todas las solicitudes registradas
// desde el backend.
export const getRequests = async () => {

    const response = await fetch(`${API_URL}/requests`);

    if (!response.ok) {
        throw new Error("Failed to fetch requests");
    }

    return await response.json();
};

// ===================================================================
// OPERACIONES DEL PANEL (CRUD)
// ===================================================================

// ACTUALIZAR (UPDATE): cambia el estado de una solicitud.
// Recibe el id de la solicitud y el id del estado nuevo.
export const updateRequestStatus = async (id, estado) => {

    const response = await fetch(`${API_URL}/requests/${id}`, {

        // PUT se usa cuando queremos modificar algo que ya existe.
        method: "PUT",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ estado })
    });

    if (!response.ok) {
        throw new Error("No se pudo cambiar el estado");
    }

    return await response.json();
};


// ELIMINAR (DELETE): borra una solicitud de la base de datos.
export const deleteRequest = async (id) => {

    const response = await fetch(`${API_URL}/requests/${id}`, {

        // DELETE se usa cuando queremos borrar algo.
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("No se pudo eliminar la solicitud");
    }

    return await response.json();
};


// SUBQUERY: trae los servicios cuyo precio esta por encima del promedio.
// La consulta con subconsulta esta en el modelo del backend.
export const getPremiumServices = async () => {

    const response = await fetch(`${API_URL}/requests/premium`);

    if (!response.ok) {
        throw new Error("No se pudieron cargar los servicios destacados");
    }

    return await response.json();
};


// GROUP BY: trae cuantas solicitudes tiene cada servicio.
// La consulta con GROUP BY y HAVING esta en el modelo del backend.
export const getServiceStatistics = async () => {

    const response = await fetch(`${API_URL}/requests/statistics`);

    if (!response.ok) {
        throw new Error("No se pudieron cargar las estadisticas");
    }

    return await response.json();
};
