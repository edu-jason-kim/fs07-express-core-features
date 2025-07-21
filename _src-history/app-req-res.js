import express from "express";

const app = express();

function authentication(req, res, next) {
  // 사용자 인증 정보 확인 후 req 객체에 사용자 id 할당
  req.user = "codeit";
  req._query = "바람막이";

  return next();
}

app.get("/products", authentication, (req, res) => {
  console.log("user", req.user);
  console.log("query", req.query);
  console.log("_query", req._query);

  console.log("상품 목록 조회");
  res.json({ message: "상품 목록 조회" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
