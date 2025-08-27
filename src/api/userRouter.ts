import express from "express";

import {
  deleteUser,
  getSingleUser,
  updateAvatarUser,
  updateUser,
} from "../controller/userController";
import { Authenticated } from "../middleware/AuthMiddleware";
import { authorizeRole } from "../middleware/AuthorizedRole";
import makeUploader, { IMAGE_FORMATS } from "../middleware/uploadMiddleware";
import multerErrorHandler from "../middleware/multerErrorHandler";
import { requireFile } from "../middleware/requiredFile";

const upload = makeUploader("avatar/", IMAGE_FORMATS, 2);

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
userRouter.put(
  "/avatar/:id",
  Authenticated,
  upload.single("avatar"),
  requireFile("avatar"),
  multerErrorHandler,
  updateAvatarUser
);
userRouter.get("/getSingleUser/:id", Authenticated, getSingleUser);
export default userRouter;
