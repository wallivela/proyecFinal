import {Router} from 'express';
import {data, usuarios} from '../controllers/controllers.js';

const router = Router();


router.get("/tablas", data)
router.get("/login", usuarios)

export default router;
