import service from "./products.service.js";

// 요청을 처리하기 위한 적합한 service를 호출

function getAll(req, res) {
  const products = service.getAll();
  return res.json(products);
}

function create(req, res) {
  service.create(req.body);
  return res.json({ message: "Product 생성 성공" });
}

function getOne(req, res) {
  const product = service.getOne(req.params.id);
  return res.json(product);
}

// ... create, update, remove

export default {
  getAll,
  getOne,
  create,
};
