import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getPreviousProcessedData, setProcessedFields, updateProcessedResults } from "../controllers/process.controller";

const router = express.Router();

router.get("/", authMiddleware, getPreviousProcessedData);
router.post("/add", authMiddleware, setProcessedFields);
router.post("/update-metrics",authMiddleware,updateProcessedResults)

export default router;