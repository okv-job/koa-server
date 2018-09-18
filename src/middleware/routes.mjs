import Router from 'koa-router';
import main from '../controller/main.mjs';
const router = new Router();

router.get('/', main.get);

export const routes = () => router.routes();
export const allowedMethods = () => router.allowedMethods();