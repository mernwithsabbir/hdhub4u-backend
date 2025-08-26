import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import {
  loginService,
  logoutService,
  registerService,
} from "../service/authService";
import { IResponse } from "../types/response";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = (await registerService(req.body)) as IResponse;
    res.status(result.status).json(result.json);
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
    const result = (await loginService(req.body, res)) as IResponse;
    res.status(result.status).json(result.json);
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Login User!"));
  }
};

export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = (await logoutService(
      req.user?.userId as string,
      res
    )) as unknown as IResponse;
    res.status(result.status).json(result.json);
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Logout User!"));
  }
};
