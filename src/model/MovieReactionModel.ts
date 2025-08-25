import mongoose, { Schema, Document, Types } from "mongoose";

export type ReactionType = "Excellent" | "Loved" | "Thanks" | "Wow" | "Sad";

export interface IMovieReaction extends Document {
  movie: Types.ObjectId; // Movie reference
  user: Types.ObjectId; // Who reacted
  type: ReactionType; // Reaction type
  createdAt?: Date;
}

const movieReactionSchema = new Schema<IMovieReaction>(
  {
    movie: { type: Schema.Types.ObjectId, ref: "movies", required: true },
    user: { type: Schema.Types.ObjectId, ref: "users", required: true },
    type: {
      type: String,
      enum: ["Excellent", "Loved", "Thanks", "Wow", "Sad"],
      required: true,
    },
  },
  { timestamps: true }
);

export const MovieReactionModel = mongoose.model<IMovieReaction>(
  "movie_reactions",
  movieReactionSchema
);
