import express from "express";
import middleware from "./products.middleware.js";
import controller from "./products.controller.js";

const router = express.Router();

router.use(middleware);

// router.route("/").get(controller.getAll).post(controller.create);
router.get("/", controller.getAll);
router.post("/", controller.create);

router.route("/:id").get(controller.getOne);

export default router;
