import { Router } from 'express';

import OrphanageController from "./controllers/OrphanageController";

const routes = Router();

routes.post('/orphanages', OrphanageController.create);

export default routes;