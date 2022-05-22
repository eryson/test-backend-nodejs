import { Router } from 'express';
import ProductsController from './app/controllers/ProductsController';

const routes = new Router();

routes.get('/products', ProductsController.getAll);

export default routes;
