import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import {
  deleteUserService,
  getSingleUserService,
  updateUserService,
} from "../service/userService";
import { IResponse } from "../types/response";

// ! Role : Admin Manage Functionality

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = (await deleteUserService(
      req.params?.id
    )) as unknown as IResponse;
    res.status(result.status).json(result.json);
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Delete User!"));
  }
};

// ? Role : User Manage Functionality
export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = (await getSingleUserService(req.params?.id)) as IResponse;
    res.status(result.status).json(result.json);
  } catch (error) {
    console.log(error);

    next(createHttpError(400, "Field To Get Single User!"));
  }
};
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = (await updateUserService(
      req.params?.id,
      req.body
    )) as IResponse;

    res.status(result.status).json(result.json);
  } catch (error) {
    console.log(error);

    next(createHttpError(400, "Field To Update User!"));
  }
};
