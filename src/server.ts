import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";
import errorHandler from "./middleware/error-handler.middleware";
import { responseMiddleware } from "./middleware/response.middleware";

export const createServer = () => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors())
    .use(responseMiddleware);

  app.get("/health", async (req: Request, res: Response) => {
    res.sendSuccess({ ok: true, env: process.env.NODE_ENV });
  });

  app.use(errorHandler);

  return app;
};
