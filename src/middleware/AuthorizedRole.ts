import { Request, Response, NextFunction } from "express";
import { ITokenPayload } from "../types/token";

export const authorizeRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as ITokenPayload; // jwt থেকে আসছে

    if (!user) {
      return res.status(401).json({
        success: false,
        errorType: "Unauthorized",
        message: "Unauthorized! No user data found.",
      });
    }

    if (!roles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        errorType: "authorizedRole",
        message: "Forbidden! You do not have permission.",
      });
    }

    next();
  };
};
