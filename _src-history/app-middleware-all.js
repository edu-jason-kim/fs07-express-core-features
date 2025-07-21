import express from "express";

const app = express();

// users/middleware.js
app.all("/users/me", (req, res, next) => {
  console.log("요청 정보 로깅 (all)");
  next();
});

// users/controller.js
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

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
