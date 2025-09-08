import { ErrorStatusCode } from "@/errors/types";
import { Meta } from "./response.type";

/* eslint-disable @typescript-eslint/no-namespace */
export type MyEnvs = {
  PORT: string;
  NODE_ENV: "development" | "production";
  BASE_URL: string;
  APP_DEBUG: string;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends MyEnvs {}
  }

  namespace Express {
    interface Response {
      sendSuccess<T>(data: T, message?: string, meta?: Meta): void;
      sendError(
        message: string,
        statusCode?: ErrorStatusCode,
        errors?: Record<string, string>,
      ): void;
      sendCreated<T>(data: T, message?: string, meta?: Meta): void;
    }
  }
}
