import express from "express";
import userMiddlewares from "../middlewares/user.js";

const userRouter = express.Router();

userRouter.use(userMiddlewares.authentication);
userRouter.use(userMiddlewares.authorization);

userRouter.get("/", (req, res) => {
  res.json({ message: "사용자 목록 조회" });
});

export default userRouter;
