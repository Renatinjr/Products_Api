import { Request, Response } from "express";
import { ProductModel, Products } from "../models/productSchema";
import { client } from "../database/connection";

export const insertProduct = async (req: Request, res: Response) => {
  const body: Products = req.body;

  try {
    client;
    await ProductModel.collection.insertOne({
      name: body.name,
      price: body.price,
      quantity: body.quantity,
      image_url: body.image_url,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ messege: "Erro ao gravar" });
  }

  return res.status(201).json({ messege: "Ok" });
};
