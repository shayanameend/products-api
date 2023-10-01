import { Router } from "express";
import { body } from "express-validator";
import { enforceValidationErrors } from "../lib/validation";
import {
  getAllProducts,
  getOneProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../handlers/product";

const apiRouter = Router();

apiRouter.get("/products", getAllProducts);
apiRouter.get("/products/:id", getOneProduct);
apiRouter.post(
  "/products",
  body("name").isString(),
  body("description").isString(),
  enforceValidationErrors,
  createProduct
);
apiRouter.put(
  "/products/:id",
  body("name").isString(),
  body("description").isString(),
  enforceValidationErrors,
  updateProduct
);
apiRouter.delete("/products/:id", deleteProduct);

export default apiRouter;
