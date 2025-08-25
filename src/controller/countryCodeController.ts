import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import {
  addCountryCodeService,
  deleteCountryCodeService,
  getCountryCodeListService,
  getSingleCountryCodeService,
  updateCountryCodeService,
} from "../service/countryCodeServices";

// ! Role : Admin Manage Functionality
export const addCountryCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await addCountryCodeService(req.body);
    res.status(200).json({
      success: true,
      message: "addCountryCode Created Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const updateCountryCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await updateCountryCodeService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "updateCountryCode Created Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const deleteCountryCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteCountryCodeService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "deleteCountryCode Created Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const getSingleCountryCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getSingleCountryCodeService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "deleteCountryCode Created Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};

// ? Role : User Manage Functionality
export const getCountryCodeList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getCountryCodeListService();
    res.status(200).json({
      success: true,
      message: "getCountryCodeList!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
