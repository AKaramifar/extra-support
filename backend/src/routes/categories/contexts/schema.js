import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: String,
    image: String,
    icon: String
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const CategoryModel = model("category", categorySchema);

export default CategoryModel;
