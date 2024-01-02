import dotenv from "dotenv";
import express, { Express } from "express";

dotenv.config();

import Env from "./utils/Env";
import Db from "./utils/Db";
import app from "./app";

const server: Express = express();
const { APP_HOST, APP_PORT } = Env;

server.use(app);

const listen = (): void => {
    server.listen(APP_PORT, APP_HOST, () => {
        console.log(`Server listenning on http://${APP_HOST}:${APP_PORT}/`);
    });
}

Db(listen);