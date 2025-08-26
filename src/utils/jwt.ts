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
  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN,
  } as SignOptions);
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, config.JWT_SECRET);
};
export const newJti = () => {
  return uuidv4();
};
