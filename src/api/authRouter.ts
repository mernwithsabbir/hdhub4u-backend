import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/authController";
import { Authenticated } from "../middleware/AuthMiddleware";

const authRouter = express.Router();

// Authentication Routes
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", Authenticated, logoutUser);

export default authRouter;
