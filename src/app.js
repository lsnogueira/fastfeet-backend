import express from 'express';
import path from 'path';

import './database';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;

/*
  TODO: ADICIONAR YULP VALIDATION E SEPARAR MIDLEWARES E CONTINUAR DESAFIO

*/
