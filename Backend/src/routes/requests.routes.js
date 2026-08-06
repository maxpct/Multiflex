import { Router } from 'express';
import { createRequest, getAllRequests } from '../controllers/requests.controller.js';

const router = Router();

router.get('/', getAllRequests);
router.post('/', createRequest);

export default router;