import mongoose, { Schema, Document, Types } from "mongoose";

export type ActivityType =
  | "signup"
  | "login"
  | "logout"
  | "movie-view"
  | "reaction"
  | "download"
  | "other";

export interface IUserActivity extends Document {
  user?: Types.ObjectId; // user reference (optional for guest)
  type: ActivityType; // activity type
  movie?: Types.ObjectId; // optional movie reference
  ipAddress?: string;
  geo?: {
    countryName?: string;
    countryCode?: string;
    countryCapital?: string;
    city?: string;
    region?: string;
    latitude?: number;
    longitude?: number;
    timezone?: string;
  };
  device?: string; // browser/device info
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: Record<string, any>; // any extra info
  createdAt?: Date;
}

const UserActivitySchema = new Schema<IUserActivity>(
  {
    user: { type: Schema.Types.ObjectId, ref: "users" },
    type: {
      type: String,
      enum: [
        "signup",
        "login",
        "logout",
        "movie-view",
        "reaction",
        "download",
        "other",
      ],
      required: true,
    },
    movie: { type: Schema.Types.ObjectId, ref: "movies" },
    ipAddress: { type: String },
    geo: {
      countryName: String,
      countryCode: String,
      countryCapital: String,
      city: String,
      region: String,
      latitude: Number,
      longitude: Number,
      timezone: String,
    },
    device: String,
    metadata: Schema.Types.Mixed,
  },
  { timestamps: true }
);

export const UserActivityModel = mongoose.model<IUserActivity>(
  "user_activity",
  UserActivitySchema
);
