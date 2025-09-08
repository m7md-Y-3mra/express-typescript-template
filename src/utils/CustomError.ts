import { ErrorStatusCode } from "../types/status-code.type";

class CustomError extends Error {
  statusCode: ErrorStatusCode;
  errors?: Record<string, string>;

  constructor({
    message,
    statusCode,
    errors,
  }: {
    message: string;
    statusCode: ErrorStatusCode;
    errors: Record<string, string>;
  }) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default CustomError;
