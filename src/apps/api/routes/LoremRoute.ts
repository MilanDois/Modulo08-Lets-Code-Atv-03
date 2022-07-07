import express from "express";
import { LoremController } from "../controllers/LoremController";

const router = express.Router();
const _controller = new LoremController();

router.get("/lorem", _controller.getLorem);

export = router;