import express from "express";

const app = express();

app.get("/products", (req, res) => {
  res.json({ message: "상품 목록 조회" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
