import { Router } from 'express';
import { getRecords, getRecord, createRecord, updateRecord, deleteRecord } from '../controllers/commentController';
import { Authorize } from '../middleware/authMiddleware';

const router = Router();
router.get('/', getRecords);
router.get('/:id', getRecord);
router.post('/', Authorize, createRecord);
router.put('/:id', Authorize, updateRecord);
router.delete('/:id', Authorize, deleteRecord);

export const commentRoutes = router;
