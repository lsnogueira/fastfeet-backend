import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.post('/recipients',);
routes.put('/recipients',);

module.exports = routes;
