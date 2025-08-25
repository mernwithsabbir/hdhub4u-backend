import { Document, Types, Schema, model } from "mongoose";

// Comment interface
export interface IComment extends Document {
  text: string;
  author: Types.ObjectId; // User reference
  post: Types.ObjectId; // Post reference
  parent?: Types.ObjectId | null; // Self reference for replies
  createdAt?: Date;
  updatedAt?: Date;
}

const commentSchema = new Schema<IComment>(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "movies",
      required: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "comments",
      default: null,
    },
  },
  { timestamps: true }
);

const Comment = model<IComment>("comments", commentSchema);

export default Comment;
