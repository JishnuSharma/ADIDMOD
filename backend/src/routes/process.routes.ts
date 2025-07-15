import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getPreviousProcessedData, setProcessedFields } from "../controllers/process.controller";

const router = express.Router();

router.get("/", authMiddleware, getPreviousProcessedData);
router.post("/add", authMiddleware, setProcessedFields);

export default router;