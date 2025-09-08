import { APP_DEBUG } from "@/config/env";
import CustomError from "@/errors/CustomError";
import { HttpErrorStatus } from "@/errors/types";
import { getErrorMessage } from "@/utils/errorMessage";
import { NextFunction, Request, Response } from "express";

const errorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent || APP_DEBUG) {
    next(error);
    return;
  }

  if (error instanceof CustomError) {
    res.sendError(error.message, error.statusCode, error.errors);
    return;
  }

  res.sendError(
    getErrorMessage(error) || "An error occurred. Please view logs for more details",
    HttpErrorStatus.InternalServerError,
  );
};

export default errorHandler;
