// ponto de start do meu app, chamar midlewares e routes com use
import express from 'express';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
  }
}

export default App().server;
