import express from "express";
import productMiddleware from "../middlewares/product.js";

const productRouter = express.Router();

productRouter.use(productMiddleware);

productRouter
  .route("/")
  .get((req, res) => {
    res.json({ message: "Product 목록 보기" });
  })
  .post((req, res) => {
    res.json({ message: "Product 추가하기" });
  });

productRouter
  .route("/:id")
  .get((req, res) => {
    res.json({ message: "Product 조회하기" });
  })
  .patch((req, res) => {
    res.json({ message: "Product 수정하기" });
  })
  .delete((req, res) => {
    res.json({ message: "Product 삭제하기" });
  });

export default productRouter;
