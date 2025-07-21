import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("요청 정보 로깅 (all)");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("사용자 정보 로깅 (users)");
  next();
});

// 사용자 정보 조회
app.get("/users/me", (req, res) => {
  console.log("사용자 정보 조회");
  res.json({ message: "사용자 정보 조회" });
});

// 사용자 정보 수정
app.patch("/users/me", (req, res) => {
  console.log("사용자 정보 수정");
  res.json({ message: "사용자 정보 수정" });
});

// 사용자 프로필 조회
app.get("/users/me/profile", (req, res) => {
  console.log("사용자 프로필 조회");
  res.json({ message: "사용자 프로필 조회" });
});

// 상품 목록 조회
app.get("/products", (req, res) => {
  console.log("상품 목록 조회");
  res.json({ message: "상품 목록 조회" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
