import pool from '../config/db.js';

export const getAllServicesModel = async () => {

    const [rows] = await pool.query(`
        SELECT
            id_servicio,
            nombre,
            descripcion,
            precio,
            imagen,
            activo,
            id_categoria
        FROM servicios
        WHERE activo = TRUE
    `);

    return rows;
};

export const getServiceByIdModel = async (id) => {

    const [rows] = await pool.query(`
        SELECT
            id_servicio,
            nombre,
            descripcion,
            precio,
            imagen,
            activo,
            id_categoria
        FROM servicios
        WHERE id_servicio = ?
    `,[id]);

    return rows[0];
};