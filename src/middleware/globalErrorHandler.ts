import { Request, Response, NextFunction } from "express";
import createHttpError, { HttpError } from "http-errors";

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  void next;
  console.error("Error 💥", err);

  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    errorType: "server",
    message,
  });
};

export const NotFound = (req: Request, res: Response, next: NextFunction) => {
  next(createHttpError(404, "Route Not Found!"));
};
