import repository from "./products.repository.js";

// repository를 통해 데이터 추출
// ** 요청을 처리하기 위한 부가적인 모든 작업을 수행 **

const getAll = () => {
  const products = repository.findAll();
  return products;
};

const getOne = (id) => {
  const product = repository.findById(id);
  return product;
};

const create = () => {
  // 생성 로직
}

export default {
  getAll,
  getOne,
  create,
};
