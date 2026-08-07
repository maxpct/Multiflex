import pool from '../config/db.js';

export const createRequestModel = async (data) => {

    const connection = await pool.getConnection();

    try {

        await connection.beginTransaction();

        // Buscar el ID del servicio por su nombre
        const [service] = await connection.query(
            `SELECT id_servicio
            FROM servicios  
            WHERE TRIM(LOWER(nombre)) = TRIM(LOWER(?))`,
            [data.servicio]
        );

        if (service.length === 0) {
            throw new Error("Servicio no encontrado.");
        }

        const idServicio = service[0].id_servicio;

        // Buscar cliente por correo
        const [client] = await connection.query(
            `SELECT id_cliente
            FROM clientes
            WHERE TRIM(LOWER(correo)) = TRIM(LOWER(?))`,
            [data.correo]
        );  

        let idCliente;

        if (client.length > 0) {

            idCliente = client[0].id_cliente;

        } else {

            const [newClient] = await connection.query(
                `INSERT INTO clientes
                (nombre, telefono, correo, direccion)
                VALUES (?, ?, ?, ?)`,
                [
                    data.nombre.trim(),
                    data.telefono.trim(),
                    data.correo.trim().toLowerCase(),
                    data.direccion.trim()
                ]
            );

            idCliente = newClient.insertId;

        }

        // Estado inicial (Pendiente = 1)
        const idEstado = 1;

        const [request] = await connection.query(
            `INSERT INTO solicitudes
            (id_cliente, id_servicio, id_estado, comentarios)
            VALUES (?, ?, ?, ?)`,
            [
                idCliente,
                idServicio,
                idEstado,
                data.comentarios
            ]
        );

        await connection.commit();

        return {
            requestId: request.insertId,
            clientId: idCliente
        };

    } catch (error) {

        await connection.rollback();
        throw error;

    } finally {

        connection.release();

    }

};

export const getAllRequestsModel = async () => {

    const [rows] = await pool.query(`
        SELECT
            s.id_solicitud,
            c.nombre AS cliente,
            c.telefono,
            c.correo,
            se.nombre AS servicio,
            e.nombre AS estado,
            s.fecha_solicitud,
            s.comentarios
        FROM solicitudes s

        INNER JOIN clientes c
        ON s.id_cliente = c.id_cliente

        INNER JOIN servicios se
        ON s.id_servicio = se.id_servicio

        INNER JOIN estados e
        ON s.id_estado = e.id_estado

        ORDER BY s.fecha_solicitud DESC
    `);

    return rows;
};

// ACTUALIZAR EL ESTADO DE UNA SOLICITUD
export const updateRequestStatusModel = async (id, estado) => {

    const [result] = await pool.query(

        `UPDATE solicitudes
        SET id_estado = ?
        WHERE id_solicitud = ?`,

        [estado, id]

    );

    return result;

};


// ELIMINAR UNA SOLICITUD
export const deleteRequestModel = async (id) => {

    const [result] = await pool.query(

        `DELETE
        FROM solicitudes
        WHERE id_solicitud = ?`,

        [id]

    );

    return result;

};


// SUBQUERY
export const getPremiumServicesModel = async () => {

    const [rows] = await pool.query(

        `SELECT
            nombre,
            precio,
            descripcion

        FROM servicios

        WHERE precio >

        (
            SELECT AVG(precio)
            FROM servicios
        )`

    );

    return rows;

};


// GROUP BY + HAVING
export const getServiceStatisticsModel = async () => {

    const [rows] = await pool.query(

        `SELECT

            se.nombre,
            COUNT(*) AS totalSolicitudes

        FROM solicitudes s

        INNER JOIN servicios se

        ON s.id_servicio = se.id_servicio

        GROUP BY se.nombre

        HAVING COUNT(*) >= 1

        ORDER BY totalSolicitudes DESC`

    );

    return rows;

};
