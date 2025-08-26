import express from "express";
import {
  // loginUser,
  // logoutUser,
  // refreshToken,
  registerUser,
} from "../controller/authController";

const authRouter = express.Router();

// Authentication Routes
authRouter.post("/register", registerUser);
// authRouter.post("/login", loginUser);
// authRouter.post("/refresh", refreshToken);
// authRouter.post("/logout", logoutUser);

export default authRouter;
