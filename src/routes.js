import { Router } from 'express';
import path from 'path';
const routes = new Router();

routes.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

export default routes;
