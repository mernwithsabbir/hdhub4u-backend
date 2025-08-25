import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITopSlider extends Document {
  movie: Types.ObjectId; // Reference to Movie
  title?: string; // Optional caption/title for slider
  subtitle?: string; // Optional subtitle
  image?: string; // Optional slider image (if different from movie thumbnail)
  order?: number; // Order in slider
  isActive?: boolean; // Whether this slide is active
}

const TopSliderSchema = new Schema<ITopSlider>(
  {
    movie: { type: Schema.Types.ObjectId, ref: "movies", required: true },
    title: { type: String },
    subtitle: { type: String },
    image: { type: String }, // fallback if you want custom image for slider
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const TopSliderModel = mongoose.model<ITopSlider>(
  "TopSlider",
  TopSliderSchema
);
