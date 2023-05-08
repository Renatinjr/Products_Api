import { Request, Response } from "express";
import { mongo } from "mongoose";
import { ProductModel, IProducts } from "../models/productSchema";
import { client } from "../database/connection";

export const insertProduct = async (req: Request, res: Response) => {
  const body: IProducts = req.body;

  try {
    client;
    await ProductModel.create({
      _id: new mongo.ObjectId(),
      name: body.name,
      price: body.price,
      quantity: body.quantity,
      image_url: body.image_url,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ messege: "Erro ao gravar" });
  }

  return res.status(201).json({ messege: "succeeded" });
};

export const getProducts = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    client;
    await ProductModel.find({});
  } catch (error) {
    console.log(Error);
    return res.status(404).json({ messege: "Not found" });
  }
  return res.status(200).json({ status: "success" });
};

export const findOneProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    client;
    ProductModel.findById(id);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ messege: "Not found" });
  }
  return res.status(200).json({ status: "succeeded" });
};

export const updateOne = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = await req.body;

    await client;
    await ProductModel.findByIdAndUpdate(id, body);
  } catch (error) {
    console.log(error);
    return res.status(204).json({ messege: "Not updated" });
  }
  return res.status(200).json({ status: "succeeded" });
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await client;
    await ProductModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return res.status(204).json({ messege: "Failed" });
  }
  return res.status(200).json({ status: "succeeded" });
};
