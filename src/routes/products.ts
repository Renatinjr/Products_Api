import express from "express";
import {
  insertProduct,
  getProducts,
  findOneProduct,
} from "../controllers/products";

const router = express.Router();

router.post("/i/product", insertProduct);
router.get("/products", getProducts);
router.get("/products/busca/:id", findOneProduct);

export default router;
