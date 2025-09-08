import { APP_DEBUG } from "@/config/env.config";
import { HttpStatusError } from "@/types/status-code.type";
import CustomError from "@/utils/CustomError";
import { getErrorMessage } from "@/utils/error-message.util";
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
    HttpStatusError.InternalServerError,
  );
};

export default errorHandler;
