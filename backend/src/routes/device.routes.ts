import express from "express";
import { addDevice, devices } from "../controllers/device.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/add", authMiddleware, addDevice);
router.get("/", authMiddleware, devices);

export default router;