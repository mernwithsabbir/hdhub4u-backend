import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar: string;
  role: "admin" | "user";
  isVerify: boolean;
  otp: {
    otp: string;
    expiresAt: Date;
  };
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 8, max: 16 },
  avatar: { type: String },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  isVerify: { type: Boolean, default: false },
  otp: {
    otp: String,
    expiresAt: Date,
  },
});

const UserModel = model<IUser>("users", userSchema);

export default UserModel;
