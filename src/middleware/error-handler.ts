import { APP_DEBUG } from "@/config/env";
import CustomError from "@/errors/CustomError";
import { getErrorMessage } from "@/utils/errorMessage";
import { NextFunction, Request, Response } from "express";

const errorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent || APP_DEBUG) {
    next(error);
    return;
  }

  if (error instanceof CustomError) {
    res.status(error.statusCode).send({
      error: {
        message: error.message,
        code: error.code,
      },
    });
    return;
  }

  res.status(500).send({
    error: {
      message: getErrorMessage(error) || "An error occurred. Please view logs for more details",
    },
  });
};

export default errorHandler;
