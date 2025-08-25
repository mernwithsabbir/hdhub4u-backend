import express from "express";
import {
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
} from "../controller/authController";

const authRouter = express.Router();

// Authentication Routes
authRouter.use("/register", registerUser);
authRouter.use("/login", loginUser);
authRouter.use("/refresh", refreshToken);
authRouter.use("/logout", logoutUser);

export default authRouter;
