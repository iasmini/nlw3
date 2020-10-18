import { Router } from 'express';
import multer from "multer";

import OrphanageController from "./controllers/OrphanageController";
import uploadConfig from "./config/upload";

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
// como esse endpoint recebe imagens, o body tem que ser multpart form ao inves de json
routes.post('/orphanages', upload.array('images'), OrphanageController.create);

export default routes;