import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.set('views', path.join(__dirname, 'views'));
    this.server.set('view engine', 'hbs');

    this.server.use(logger('dev'));
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(cookieParser());
    this.server.use(express.static(path.join(__dirname, 'public')));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
