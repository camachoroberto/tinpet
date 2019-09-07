import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.render('index', { title: 'Tinpet' }));

export default routes;
