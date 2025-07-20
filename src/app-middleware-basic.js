import express from "express";

const app = express();

function logRequest(req, res, next) {
  console.log("요청 정보 로깅", req.baseUrl);
  next();
}

function authCheck(req, res, next) {
  console.log("인증 정보 확인");
  next();
}

function greeting(req, res, next) {
  console.log("안녕, 코드잇 (;");
  res.json({ message: "안녕, 코드잇 (;" });
}

app.get("/", logRequest, authCheck, greeting);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
