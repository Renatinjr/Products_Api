import { Request, Response, NextFunction } from "express";
import { ProductModel, Products, objectId } from "../models/productSchema";
import { connectToDataBase } from "../database/connection";
type products = Products;

const insertProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body: products = req.body;

  const client = await connectToDataBase();

  ProductModel.collection.insertOne({
    _id: objectId,
    name: body.name,
    price: body.price,
    quantity: body.quantity,
    image_url: body.image_url,
  });

  await client?.disconnect();

  return res.status(200).json({ messege: "Ok" });
};
