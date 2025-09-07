import { ErrorStatusCode } from "./types";

class CustomError extends Error {
  statusCode: ErrorStatusCode;

  constructor({ message, statusCode }: { message: string; statusCode: ErrorStatusCode }) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default CustomError;
