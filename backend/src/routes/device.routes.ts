import express from "express";
import { addDevice } from "../controllers/device.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post('/add',authMiddleware,addDevice);

export default router;