import {Router} from 'express';
import {hola, adios, data} from '../controllers/controllers.js';

const router = Router();

router.get("/hi", hola)//nombre de el endpoint y nombre de la funsion
router.get("/bye", adios)
router.get("/tablas", data)

export default router;
