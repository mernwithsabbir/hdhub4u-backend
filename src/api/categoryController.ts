import express from "express";
import {
  addCategory,
  addSubCategory,
  deleteCategory,
  deleteSubCategory,
  getCategoryList,
  getCategoryWithSubCategoryList,
  getSingleCategory,
  getSingleSubCategory,
  updateCategory,
  updateSubCategory,
} from "../controller/categoryController";

const categoryRouter = express.Router();

//! Role : Admin Managed Routes
categoryRouter.post("/addCategory", addCategory);
categoryRouter.put("/updateCategory/:id", updateCategory);
categoryRouter.delete("/deleteCategory/:id", deleteCategory);
categoryRouter.get("/getSingleCategory", getSingleCategory);
categoryRouter.post("/addSubCategory", addSubCategory);
categoryRouter.put("/updateSubCategory/:id", updateSubCategory);
categoryRouter.delete("/deleteSubCategory/:id", deleteSubCategory);
categoryRouter.get("/getSingleSubCategory/:id", getSingleSubCategory);

//? Role : User Managed Routes
categoryRouter.get("/getCategoryList", getCategoryList);
categoryRouter.get(
  "/getCategoryWithSubCategoryList",
  getCategoryWithSubCategoryList
);

export default categoryRouter;
