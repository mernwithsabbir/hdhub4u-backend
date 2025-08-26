import { RegisterDto, registerValidate } from "../dto/authDto";
import UserModel, { IUser } from "../model/userModel";
import { IResponse } from "../types/response";

export const registerService = async (value: Partial<IUser>) => {
  const validate = registerValidate.safeParse(value);
  if (!validate.success) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "dto",
        message: "Validation Fail!",
        data: validate.error.flatten().fieldErrors,
      },
    };
  }

  const data = validate.data as RegisterDto;

  const existUser = await UserModel.countDocuments({
    email: data.email,
  });

  if (existUser !== 0) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "exist",
        message: "User Email Already Exist!try Another Email Address.",
      },
    };
  }

  const create = await UserModel.create({
    username: data.username,
    email: data.email,
    password: data.password,
    role: data.role,
    isVerify: data.isVerify,
  });
  if (!create) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "create",
        message: "Field To Register User.",
      },
    };
  }
  return <IResponse>{
    status: 200,
    json: {
      success: true,
      message: "User Register Successfully!",
      data: data,
    },
  };
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
