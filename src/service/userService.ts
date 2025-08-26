import { Types } from "mongoose";
import bcrypt from "bcrypt";
import UserModel, { IUser } from "../model/userModel";
import { IResponse } from "../types/response";
import { UpdateUserDto, updateUserValidate } from "../dto/authDto";

// ! Role : Admin Manage Functionality
export const deleteUserService = async (id: string) => {
  if (!id) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "notFound",
        message: "User Id Is Not Found In Your Params!",
      },
    };
  }

  const existUser = await UserModel.findById(id, { _id: 1 });

  if (!existUser) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "exist",
        message: "Invalid User Id.User Not Found!",
      },
    };
  }

  await UserModel.deleteOne({ _id: new Types.ObjectId(id) });

  return <IResponse>{
    status: 200,
    json: {
      success: true,
      message: "User Deleted Successfully!",
    },
  };
};

// ? Role : User Manage Functionality
export const getSingleUserService = async (id: string) => {
  const existUser = await UserModel.findById({ _id: new Types.ObjectId(id) });
  if (!existUser) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "exist",
        message: "Invalid User Id.User Not Found!",
      },
    };
  }

  return <IResponse>{
    status: 200,
    json: {
      success: true,
      message: "Successfully Fetch User From User Id!",
      data: existUser,
    },
  };
};
export const updateUserService = async (id: string, value: UpdateUserDto) => {
  const validate = updateUserValidate.safeParse(value);
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

  const data = validate.data as UpdateUserDto;
  const existUser = await UserModel.findOne({
    _id: new Types.ObjectId(id),
  }).select("+password");

  if (!existUser) {
    return <IResponse>{
      status: 400,
      json: {
        success: false,
        errorType: "exist",
        message: "User Not Found Invalid User Id!.",
      },
    };
  }

  if (value?.oldPassword) {
    const compare = (await existUser.comparePassword(
      data.oldPassword as string
    )) as unknown as boolean;
    console.log(compare);

    if (!compare) {
      return <IResponse>{
        status: 400,
        json: {
          success: false,
          errorType: "compare",
          message: "Invalid Old Password!.",
        },
      };
    }
  }

  let hashPassword = await bcrypt.hash(data.password!, 10);

  const update = (await UserModel.updateOne(
    { _id: new Types.ObjectId(id) },
    {
      $set: {
        password: hashPassword,
        role: data.role,
        isVerify: data.isVerify,
      },
    }
  )) as unknown as IUser;
  return <IResponse>{
    status: 200,
    json: {
      success: true,
      message: "User Updated Successfully!",
      data: update,
    },
  };
};
