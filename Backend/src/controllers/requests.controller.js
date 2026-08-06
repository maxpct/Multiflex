import { createRequestModel, getAllRequestsModel } from "../models/request.model.js";

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