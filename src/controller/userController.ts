import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import {
  deleteUserService,
  getSingleUserService,
  updateUserService,
} from "../service/userService";

// ! Role : Admin Manage Functionality

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteUserService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};

// ? Role : User Manage Functionality
export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getSingleUserService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await updateUserService(req.params?.id);

    res.status(200).json({
      success: true,
      message: "User Updated Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
