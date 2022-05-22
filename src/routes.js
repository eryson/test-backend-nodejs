import { Router } from 'express';
import ProductsController from './app/controllers/ProductsController';
import CategoriesController from './app/controllers/CategoriesController';

const routes = new Router();

routes.get('/products', ProductsController.getAll);
routes.get('/products/filter', ProductsController.getByFilter);
routes.post('/products', ProductsController.create);
routes.put('/products/:id', ProductsController.update);
routes.delete('/products/:id', ProductsController.delete);

routes.get('/categories', CategoriesController.getAll);
routes.get('/categories/filter', CategoriesController.getByFilter);
routes.post('/categories', CategoriesController.create);
routes.put('/categories/:id', CategoriesController.update);
routes.delete('/categories/:id', CategoriesController.delete);

export default routes;
