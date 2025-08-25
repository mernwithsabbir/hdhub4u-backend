import { Document, model, Schema } from "mongoose";

export interface ICategory extends Document {
  title: string;
  slug: string;
}

const categorySchema = new Schema<ICategory>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

const CategoryModel = model<ICategory>("categories", categorySchema);

export default CategoryModel;
