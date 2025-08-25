import { IUser } from "../model/userModel";

export const registerService = async (data: Partial<IUser>) => {
  try {
    return data;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Register User");
  }
};
export const loginService = async (data: Partial<IUser>) => {
  try {
    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    throw new Error(message);
  }
};
export const refreshTokenService = async (token: { token: string }) => {
  try {
    return token;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    throw new Error(message);
  }
};
export const logoutService = async (token: { token: string }) => {
  try {
    return token;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    throw new Error(message);
  }
};
