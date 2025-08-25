import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import {
  loginService,
  refreshTokenService,
  registerService,
} from "../service/authService";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerService(req.body);
    res.status(200).json({
      success: true,
      message: "User Register Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await loginService(req.body);
    res.status(200).json({
      success: true,
      message: "User Login Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Login User!"));
  }
};
export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await refreshTokenService(req.cookies?.accessToken);
    res.status(200).json({
      success: true,
      message: "User refreshToken Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To refreshToken User!"));
  }
};
export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await refreshTokenService(req.cookies?.accessToken);
    res.status(200).json({
      success: true,
      message: "User Logout Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Logout User!"));
  }
};
