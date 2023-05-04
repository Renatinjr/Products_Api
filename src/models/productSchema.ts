import mongoose from "mongoose";

const { Schema } = mongoose;
export const objectId = new mongoose.Types.ObjectId();

export interface Products {
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

const ProductSchema = new Schema<Products>({});

export const ProductModel = mongoose.model("products", ProductSchema);
