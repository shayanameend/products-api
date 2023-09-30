import { Router } from "express";

const apiRouter = Router();

apiRouter.get("products");
apiRouter.get("products");
apiRouter.post("products");
apiRouter.put("products");
apiRouter.delete("products");

apiRouter.get("product-updates");
apiRouter.get("product-updates");
apiRouter.post("product-updates");
apiRouter.put("product-updates");
apiRouter.delete("product-updates");

apiRouter.get("product-features");
apiRouter.get("product-features");
apiRouter.post("product-features");
apiRouter.put("product-features");
apiRouter.delete("product-features");

export default apiRouter;
