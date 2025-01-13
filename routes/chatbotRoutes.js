import express from "express";
import { askQuestion } from "../controller/chatBotController.js";

const router = express.Router();

router.post("/ask-question", askQuestion);

export default router;
