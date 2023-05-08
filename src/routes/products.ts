import express from "express";
import {
  insertProduct,
  getProducts,
  findOneProduct,
  updateOne,
  deleteOne,
} from "../controllers/products";

const router = express.Router();

router.post("/i/product", insertProduct);
router.get("/products", getProducts);
router.get("/products/busca/:id", findOneProduct);
router.put("/products/update/:id", updateOne);
router.delete("/products/delete/:id", deleteOne);

export default router;
