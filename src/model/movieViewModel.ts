import mongoose, { Schema, Document, Types } from "mongoose";

export interface IMovieView extends Document {
  movie: Types.ObjectId; // Movie reference
  ipAddress: string; // viewer IP
  countryName?: string;
  countryCode?: string;
  countryCapital?: string;
  city?: string;
  region?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  userAgent?: string; // browser/device info
  viewedAt?: Date; // timestamp
}

const MovieViewSchema = new Schema<IMovieView>(
  {
    movie: { type: Schema.Types.ObjectId, ref: "movies", required: true },
    ipAddress: { type: String, required: true },
    countryName: { type: String },
    countryCode: { type: String },
    countryCapital: { type: String },
    city: { type: String },
    region: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    timezone: { type: String },
    userAgent: { type: String },
    viewedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const MovieViewModel = mongoose.model<IMovieView>(
  "movie_views",
  MovieViewSchema
);
