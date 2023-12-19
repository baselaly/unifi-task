import express, { Express } from "express";
import cors from "cors";
import errorMiddleware from "../middlewares/error.middleware";
import router from "./router";

const app: Express = express();

app.use(cors(), express.json());

app.use("/api/v1", router);

app.use(errorMiddleware);

export default app;

