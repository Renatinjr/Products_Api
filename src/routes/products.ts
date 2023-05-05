import express from "express";
import {
  insertProduct,
  getProducts,
  findOneProduct,
  updateOne,
} from "../controllers/products";

const router = express.Router();

router.post("/i/product", insertProduct);
router.get("/products", getProducts);
router.get("/products/busca/:id", findOneProduct);
router.put("/products/update/:id", updateOne);

export default router;
