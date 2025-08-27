import { Document, model, Schema } from "mongoose";
import bcrypt from "bcrypt";
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
  comparePassword(password: string): Promise<void>;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 8, max: 16, select: false },
    avatar: { type: String, default: "/avatar/default-avatar.jpg" },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    isVerify: { type: Boolean, default: false },
    otp: {
      otp: String,
      expiresAt: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};
const UserModel = model<IUser>("users", userSchema);

export default UserModel;
