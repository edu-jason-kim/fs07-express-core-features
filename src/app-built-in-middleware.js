import express from "express";

const app = express();

// 사용자가 요청에 담아서 보낸 JSON 데이터를 req.body에 JS 객체 형태로 할당해서 next로 다음 미들웨어로 넘겨줌
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// "files" 이후의 경로로 "public" 폴더의 파일을 url 매핑해서 서빙을 하겠다.
// 예) http://localhost:3000/files/bye.jpeg
app.use("/files", express.static("public"));

app.get("/products", (req, res) => {
  res.json({ message: "상품 목록 조회" });
});

app.post("/products", (req, res) => {
  console.log(req.body);
  res.json({ message: "상품 생성" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
