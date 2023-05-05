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

export const getProducts = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    client;
    const body = await ProductModel.find({});
    return res.status(200).json(body);
  } catch (error) {
    console.log(Error);
    return res.status(404).json({ messege: "Not found" });
  }
};

export const findOneProduct = async (req: Request, res: Response) => {
  try {
    client;
    const id = req.params.id;
    const response = await ProductModel.findById(id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ messege: "Not found" });
  }
};

export const updateOne = async (req: Request, res: Response) => {
  try {
    await client;
    // const id = req.params.id;
    const body: Products = req.body;

    const responseDb = await ProductModel.updateOne({}, {}).set(
      { quantity: 10 },
      {
        name: body.name,
        price: body.price,
        quantity: body.quantity,
        image_url: body.image_url,
      }
    );
    console.log(responseDb);
    res.status(200).json({ messege: "ok" });
  } catch (error) {
    console.log(error);
    res.status(204).json({ messege: "No content" });
  }
};
