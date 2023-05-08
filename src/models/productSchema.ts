import mongoose from "mongoose";

const { Schema } = mongoose;
export const objectId = new mongoose.Types.ObjectId();

export interface IProducts {
  _id: any;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

const ProductSchema = new Schema<IProducts>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image_url: { type: String, required: true },
});

export const ProductModel = mongoose.model(
  "products",
  ProductSchema,
  "products"
);
