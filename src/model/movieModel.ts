import mongoose, { Schema, Document, Types } from "mongoose";

export interface IMovie extends Document {
  title: string;
  slug: string; // SEO friendly URL
  description: string;
  shortDesc?: string;
  year: number;
  duration?: string; // 2h 10m
  genre: string[]; // ["Action", "Comedy"]
  language: string; // original language
  dubbedLanguages?: string[]; // ["Hindi", "English"]
  director?: string;
  cast?: string[]; // ["Actor1", "Actor2"]
  rating?: number; // IMDB rating / 0-10
  ageRating?: string; // "PG-13", "R"
  thumbnail: string; // main poster
  gallery?: string[]; // additional images/screenshots
  categories: Types.ObjectId[]; // reference Category collection
  subcategories?: Types.ObjectId[]; // reference Subcategory
  downloadLinks: {
    quality: string; // 480p, 720p, 1080p
    size?: string; // "1.2GB"
    link: string; // actual download URL
    type: string; // torrent, direct, magnet
  }[];
  subtitleLinks?: {
    language: string;
    link: string;
  }[];
  geoRestriction?: string[]; // country codes ["BD","US"]
  uploadedBy?: Types.ObjectId; // reference User
  isFeatured?: boolean;
  isActive?: boolean;
  remark: "Most Views" | "Popular" | "Top" | "Most Likes" | "Normal";
}

const downloadLinkSchema = new Schema(
  {
    quality: { type: String, required: true },
    size: { type: String },
    link: { type: String, required: true },
    type: { type: String, required: true },
  },
  { _id: false }
);

const subtitleSchema = new Schema(
  {
    language: { type: String, required: true },
    link: { type: String, required: true },
  },
  { _id: false }
);

const MovieSchema = new Schema<IMovie>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    shortDesc: { type: String },
    year: { type: Number, required: true },
    duration: { type: String },
    genre: { type: [String], required: true },
    language: { type: String, required: true },
    dubbedLanguages: { type: [String] },
    director: { type: String },
    cast: { type: [String] },
    rating: { type: Number, default: 0 },
    ageRating: { type: String },
    thumbnail: { type: String, required: true },
    gallery: { type: [String] },
    categories: [{ type: Schema.Types.ObjectId, ref: "categories" }],
    subcategories: [{ type: Schema.Types.ObjectId, ref: "sub_categories" }],
    downloadLinks: { type: [downloadLinkSchema], required: true },
    subtitleLinks: { type: [subtitleSchema] },
    geoRestriction: { type: [String] },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User" },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    remark: {
      type: String,
      enum: ["Most Views", "Popular", "Top", "Most Likes", "Normal"],
      default: "Normal",
    },
  },
  { timestamps: true }
);

export const MovieModel = mongoose.model<IMovie>("movies", MovieSchema);
