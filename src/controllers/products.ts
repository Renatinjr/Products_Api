import { Request, Response } from "express";
import { ProductModel, Products, objectId } from "../models/productSchema";
import { connection } from "../database/connection";
type products = Products;

export const insertProduct = async (req: Request, res: Response) => {
  const body: products = req.body;
  try {
    console.log("Dentro do insert");
    await connection;
    await ProductModel.collection.insertOne({
      _id: objectId,
      name: body.name,
      price: body.price,
      quantity: body.quantity,
      image_url: body.image_url,
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("disconectado");
    (await connection).disconnect();
  }

  return res.status(200).json({ messege: "Ok" });
};
