import { Router } from 'express';
import { getProducts } from '../controllers/producto';

const router = Router();

router.get('/', getProducts);

export default router;