import ProductModel from "../models/product.model.js";

function getAll(req, res) {
  // Product Model을 호출
  const products = ProductModel.findAll();

  // JSON 형태로 View를 선택
  return res.json(products);
}

function create(req, res) {
  return res.json({ message: "Product 생성 성공" });
}

function getOne(req, res) {
  // Product Model을 호출
  const product = ProductModel.findById(req.params.id);

  // JSON 형태로 View를 선택
  return res.json(product);
}

// ... create, update, remove

export default {
  getAll,
  getOne,
  create
};
