import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import {
  addCategoryService,
  addSubCategoryService,
  deleteCategoryService,
  deleteSubCategoryService,
  getCategoryListService,
  getCategoryWithSubCategoryListService,
  getSingleCategoryService,
  getSingleSubCategoryService,
  updateCategoryService,
  updateSubCategoryService,
} from "../service/categoryService";

// ! Role : Admin Manage Functionality

// Category Related Controllers
export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await addCategoryService(req.body);
    res.status(200).json({
      success: true,
      message: "Category Created Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateCategoryService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Category Updated Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteCategoryService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Category Deleted Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};

export const getSingleCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getSingleCategoryService(req.params?.id);

    res.status(200).json({
      success: true,
      message: "getCategoryWithSubCategoryList Fetch Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
// Sub Category Related Controllers
export const addSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await addSubCategoryService(req.body);

    res.status(200).json({
      success: true,
      message: "SubCategory Created Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const updateSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateSubCategoryService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "SubCategory Updated Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const deleteSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteSubCategoryService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "SubCategory Deleted Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};

export const getSingleSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getSingleSubCategoryService(req.params?.id);

    res.status(200).json({
      success: true,
      message: "getCategoryWithSubCategoryList Fetch Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
// ? Role : User Manage Functionality
export const getCategoryList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getCategoryListService();

    res.status(200).json({
      success: true,
      message: "Category List Fetch Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const getCategoryWithSubCategoryList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getCategoryWithSubCategoryListService();

    res.status(200).json({
      success: true,
      message: "getCategoryWithSubCategoryList Fetch Successfully!",
      data: result,
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
