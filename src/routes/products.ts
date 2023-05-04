import express from "express";
import { insertProduct } from "../controllers/products";

const router = express.Router();

router.post("/product", insertProduct);

export default router;
