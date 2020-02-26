import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

module.exports = routes;
