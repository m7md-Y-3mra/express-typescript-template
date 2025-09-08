import { NextFunction, Request, Response } from "express";
import { ApiResponse, Meta } from "../types/response.type";

export const responseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Success response method
  res.sendSuccess = <T>(data: T, message = "Request successful", meta?: Meta) => {
    const response: ApiResponse<T> = {
      status: "success",
      message,
      data,
      ...(meta && { meta }),
    };
    res.status(200).json(response);
  };

  // Error response method
  res.sendError = (message: string, statusCode = 400, errors?: Record<string, string>) => {
    const response: ApiResponse<null> = {
      status: "error",
      message,
      ...(errors && { errors }),
    };
    res.status(statusCode).json(response);
  };

  // Created response method
  res.sendCreated = <T>(data: T, message = "Resource created successfully", meta?: Meta) => {
    const response: ApiResponse<T> = {
      status: "success",
      message,
      data,
      ...(meta && { meta }),
    };
    res.status(201).json(response);
  };

  next();
};
