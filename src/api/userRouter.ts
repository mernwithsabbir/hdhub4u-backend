import express from "express";

import {
  deleteUser,
  getSingleUser,
  updateUser,
} from "../controller/userController";

const userRouter = express.Router();

//! Role : Admin Managed Routes
userRouter.delete("/deleteUser", deleteUser);

//? Role : User Managed Routes
userRouter.put("/updateUser/:id", updateUser);
userRouter.get("/getSingleUser/:id", getSingleUser);
export default userRouter;
