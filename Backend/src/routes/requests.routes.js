import { Router } from 'express';

import {

    createRequest,
    getAllRequests,
    updateRequestStatus,
    deleteRequest,
    getPremiumServices,
    getRequestsByClient,
    getServiceStatistics

} from '../controllers/requests.controller.js';

const router = Router();

router.get('/', getAllRequests);

router.post('/', createRequest);

router.put('/:id', updateRequestStatus);

router.delete('/:id', deleteRequest);

router.get('/premium', getPremiumServices);

router.get('/statistics', getServiceStatistics);

router.get('/cliente/:id', getRequestsByClient);

export default router;