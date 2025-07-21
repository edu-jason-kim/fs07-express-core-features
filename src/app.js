import express from "express";
import multer from "multer";
import path from "path";

const app = express();

app.use("/files", express.static("uploads"));

const storage = multer.diskStorage({
  // 어느 폴더에 저장할지
  destination: (req, file, cb) => {
    cb(null, `uploads/`);
  },

  // 파일 이름을 어떻게 저장할지
  filename: (req, file, cb) => {
    const userId = req.header("x-user-id") ?? "anon";
    const ext = path.extname(file.originalname);
    const name = `${userId}_${Date.now()}${ext}`;
    cb(null, name);
  },
});

const upload = multer({ storage });

app.post("/files", upload.single("attachment"), (req, res) => {
  const path = `http://localhost:3000/files/${req.file.filename}`;
  res.json({ path });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
