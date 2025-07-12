import express from "express";
import { addDevice, devices, editDevice } from "../controllers/device.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/add", authMiddleware, addDevice);
router.put("/update",authMiddleware,editDevice);
router.get("/", authMiddleware, devices);

export default router;