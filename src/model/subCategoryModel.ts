import { Document, model, Schema, Types } from "mongoose";
export interface ISubCategory extends Document {
  title: string;
  slug: string;
  parentCategory: Types.ObjectId;
}

const subCategorySchema = new Schema<ISubCategory>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  parentCategory: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "categories",
  },
});

const SubCategoryModel = model<ISubCategory>(
  "sub_categories",
  subCategorySchema
);

export default SubCategoryModel;
