import express from "express";

import {
  deleteUser,
  getSingleUser,
  updateUser,
} from "../controller/userController";
import { Authenticated } from "../middleware/AuthMiddleware";
import { authorizeRole } from "../middleware/AuthorizedRole";

const userRouter = express.Router();

//! Role : Admin Managed Routes
userRouter.delete(
  "/deleteUser/:id",
  Authenticated,
  authorizeRole(["admin"]),
  deleteUser
);

//? Role : User Managed Routes
userRouter.put("/updateUser/:id", Authenticated, updateUser);
userRouter.get("/getSingleUser/:id", Authenticated, getSingleUser);
export default userRouter;
