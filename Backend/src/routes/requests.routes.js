import { Router } from 'express';

import {

    createRequest,
    getAllRequests,
    updateRequestStatus,
    deleteRequest,
    getPremiumServices,
    getServiceStatistics

} from '../controllers/requests.controller.js';

const router = Router();

router.get('/', getAllRequests);

router.post('/', createRequest);

router.put('/:id', updateRequestStatus);

router.delete('/:id', deleteRequest);

router.get('/premium', getPremiumServices);

router.get('/statistics', getServiceStatistics);

export default router;