'use strict';
import Koa from 'koa';

import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import compress from 'koa-compress';

import {
    routes,
    allowedMethods
} from './src/middleware/routes';
import errorHandler from './src/middleware/error';

import config from './config.mjs';

const app = new Koa();

export default app;

app.use(helmet())
    .use(compress())
    .use(logger())
    .use(errorHandler)
    .use(bodyParser())
    .use(routes())
    .use(allowedMethods());

app.on("error", (err, ctx) => console.log("Custom error handler", err, ctx));

console.log(`Listening on ${config.PORT}`);
app.listen(config.PORT);