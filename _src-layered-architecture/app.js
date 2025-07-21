import express from "express";
import always from "./middlewares/always.js";
import productRouter from "./products/products.route.js";

const app = express();

app.use(always);

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
