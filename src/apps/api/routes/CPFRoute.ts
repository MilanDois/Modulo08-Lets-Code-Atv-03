import express from "express";
import { CPFController } from "../controllers/CPFController";

const router = express.Router();
const _controller = new CPFController();

router.get("/newcpf", _controller.generateCPF);
router.post("/checkcpf", _controller.checkCPF)

export = router;
