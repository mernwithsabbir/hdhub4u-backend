import { config } from "../config/config";
import { IUser } from "../model/userModel";
import jwt, { SignOptions } from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
export const signAccessToken = (user: IUser) => {
  const payload = {
    userId: user._id,
    role: user.role,
    email: user.email,
  };
  return jwt.sign(payload, config.JWT_ACCESS_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRES_IN,
  } as SignOptions);
};
export const signRefreshToken = (user: IUser, jti: string) => {
  const payload = {
    userId: user._id,
    role: user.role,
    email: user.email,
    jti,
  };
  return jwt.sign(payload, config.JWT_REFRESH_SECRET, {
    expiresIn: config.REFRESH_TOKEN_EXPIRES_IN,
  } as SignOptions);
};
export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, config.JWT_ACCESS_SECRET);
};
export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, config.JWT_REFRESH_SECRET);
};
export const newJti = () => {
  return uuidv4();
};
