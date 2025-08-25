import { ICategory } from "../model/categoryModel";
import { ISubCategory } from "../model/subCategoryModel";

// ! Role : Admin Manage Functionality

// Category Related Controllers
export const addCategoryService = async (data: Partial<ICategory>) => {
  try {
    return data;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Create Category");
  }
};
export const updateCategoryService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Update Category");
  }
};
export const deleteCategoryService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Delete Category");
  }
};

export const getSingleCategoryService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Single Category");
  }
};
// Sub Category Related Controllers
export const addSubCategoryService = async (data: Partial<ISubCategory>) => {
  try {
    return data;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Create Sub Category");
  }
};
export const updateSubCategoryService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Update Sub Category");
  }
};
export const deleteSubCategoryService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Delete Sub Category");
  }
};

export const getSingleSubCategoryService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Single Sub Category");
  }
};
// ? Role : User Manage Functionality
export const getCategoryListService = async () => {
  try {
    return true;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Category");
  }
};
export const getCategoryWithSubCategoryListService = async () => {
  try {
    return true;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Category With Sub Category");
  }
};
