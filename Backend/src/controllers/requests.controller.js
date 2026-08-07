import {
    createRequestModel,
    getAllRequestsModel,
    updateRequestStatusModel,
    deleteRequestModel,
    getPremiumServicesModel,
    getServiceStatisticsModel,
    getRequestsByClientModel // <-- Importación agregada para que no te tire error
} from "../models/request.model.js";

export const createRequest = async (req, res) => {

    try {
        
        const {
            nombre,
            telefono,
            correo,
            colonia,
            servicio,
            mensaje
        } = req.body;

        if (
            !nombre ||
            !telefono ||
            !correo ||
            !colonia ||
            !servicio
        ) {

            return res.status(400).json({
                success: false,
                message: "Todos los campos obligatorios deben ser completados."
            });

        }

        const requestData = {

            nombre,
            telefono,
            correo,
            direccion: colonia,
            servicio,
            comentarios: mensaje || ""

        };

        const result = await createRequestModel(requestData);

        return res.status(201).json({

            success: true,
            message: "Solicitud registrada correctamente.",
            requestId: result.requestId,

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            message: "Error interno del servidor."

        });

    }

};

export const getAllRequests = async (req, res) => {

    try {

        const requests = await getAllRequestsModel();

        return res.status(200).json(requests);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            message: "Error interno del servidor."

        });

    }

};

// ACTUALIZAR ESTADO
export const updateRequestStatus = async (req, res) => {

    try {

        const { id } = req.params;
        const { estado } = req.body;

        await updateRequestStatusModel(id, estado);

        return res.status(200).json({

            success: true,
            message: "Estado actualizado correctamente."

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            message: "Error interno del servidor."

        });

    }

};


// ELIMINAR SOLICITUD
export const deleteRequest = async (req, res) => {

    try {

        const { id } = req.params;

        await deleteRequestModel(id);

        return res.status(200).json({

            success: true,
            message: "Solicitud eliminada correctamente."

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            message: "Error interno del servidor."

        });

    }

};


// SERVICIOS MÁS CAROS (SUBQUERY)
export const getPremiumServices = async (req, res) => {

    try {

        const services = await getPremiumServicesModel();

        return res.status(200).json(services);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            message: "Error interno del servidor."

        });

    }

};


// ESTADÍSTICAS (GROUP BY + HAVING)
export const getServiceStatistics = async (req, res) => {

    try {

        const statistics = await getServiceStatisticsModel();

        return res.status(200).json(statistics);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            message: "Error interno del servidor."

        });

    }

};

export const getRequestsByClient = async (req, res) => {

    try {

        const { id } = req.params;

        const requests = await getRequestsByClientModel(id);

        return res.status(200).json(requests);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            message: "Error interno del servidor."

        });

    }

};