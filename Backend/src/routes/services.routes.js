import { Router } from 'express';
import {
    getAllServices,
    getServiceById
} from '../controllers/services.controller.js';

const router = Router();

// GET all services
router.get('/', getAllServices);

// GET service by ID
router.get('/:id', getServiceById);

export default router;