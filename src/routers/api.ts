import { Router } from "express";
import { body } from "express-validator";
import {
  getAllProducts,
  getOneProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../handlers/product";

const apiRouter = Router();

apiRouter.get("products", getAllProducts);
apiRouter.get("products/:id", getOneProduct);
apiRouter.post(
  "products",
  body("name", "description").isString(),
  createProduct
);
apiRouter.put(
  "products/:id",
  body("name", "description").isString(),
  updateProduct
);
apiRouter.delete("products/:id", deleteProduct);

export default apiRouter;
