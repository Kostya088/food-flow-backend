import { Router } from 'express';
import { getAllShops } from '../controllers/shopsController.js';

const router = Router();

router.get('/shops', getAllShops);

export default router;
