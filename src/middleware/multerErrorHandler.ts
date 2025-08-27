import { NextFunction, Request, Response } from "express";
import { MulterError } from "multer";

const multerErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // -----------------------------
  // 1. Multer built-in errors
  // -----------------------------
  if (err instanceof MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        errorType: "LIMIT_FILE_SIZE",
        message: "File size too large! Max limit exceeded.",
      });
    }
    return res.status(400).json({
      success: false,
      errorType: "multer",
      message: err.message,
    });
  }

  // -----------------------------
  // 2. Custom fileFilter errors
  // -----------------------------
  if (err) {
    return res.status(400).json({
      success: false,
      errorType: "fileFilter",
      message: err.message,
    });
  }

  // -----------------------------
  next();
};

export default multerErrorHandler;
