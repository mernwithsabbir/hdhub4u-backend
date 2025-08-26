import { Response } from "express";

import {
  LoginDto,
  loginValidate,
  RegisterDto,
  registerValidate,
} from "../dto/authDto";
import UserModel, { IUser } from "../model/userModel";
import { IResponse } from "../types/response";
import { clearAuthCookies, setAuthCookies } from "../utils/cookie";
import { signAccessToken } from "../utils/jwt";

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

  const existUsername = await UserModel.countDocuments({
    username: data.username,
  });
  if (existUsername !== 0) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "exist",
        message: "User Name Already Exist!try Another Username Address.",
      },
    };
  }
  const create = (await UserModel.create({
    username: data.username,
    email: data.email,
    password: data.password,
    role: data.role,
    isVerify: data.isVerify,
  })) as IUser;
  return <IResponse>{
    status: 200,
    json: {
      success: true,
      message: "User Register Successfully!",
      data: {
        _id: create._id,
        email: create.email,
        username: create.username,
      },
    },
  };
};
export const loginService = async (value: Partial<IUser>, res: Response) => {
  const validate = loginValidate.safeParse(value);
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
  const existUser = await UserModel.findOne({
    email: value.email,
  }).select("+password");

  if (!existUser) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "exist",
        message: "User Email Not Exist!try Another Email Address.",
      },
    };
  }
  const data = validate.data as LoginDto;
  const compare = (await existUser?.comparePassword(
    data.password
  )) as unknown as boolean;
  if (!compare) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "compare",
        message: "Invalid Password!Please Enter Correct Password.",
      },
    };
  }

  const token = signAccessToken(existUser);

  setAuthCookies(res, token);
  return <IResponse>{
    status: 200,
    json: {
      success: true,
      message: "User Login Successfully.",
      token: token,
    },
  };
};
export const logoutService = async (userId: string, res: Response) => {
  if (!userId) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "invalid",
        message: "User Not Found!",
        data: "Invalid User.Logout Fail!",
      },
    };
  }
  const existUser = await UserModel.findById(userId);

  if (!existUser) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "exist",
        message: "Invalid User Credential!",
      },
    };
  }

  clearAuthCookies(res);
  return <IResponse>{
    status: 200,
    json: {
      success: true,
      message: "User Logout Successfully!",
    },
  };
};
