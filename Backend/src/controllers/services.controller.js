import {
    getAllServicesModel,
    getServiceByIdModel
} from '../models/service.model.js';

export const getAllServices = async (req, res) => {

    try {

        const services = await getAllServicesModel();

        res.status(200).json(services);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const getServiceById = async (req, res) => {

    try {

        const service = await getServiceByIdModel(req.params.id);

        if (!service) {

            return res.status(404).json({
                message: "Service not found"
            });

        }

        res.status(200).json(service);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};