import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/products", (req, res) => {
  res.json({ message: "상품 목록 조회" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
