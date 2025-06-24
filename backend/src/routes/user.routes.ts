import express from "express";
import {
    loginUser,
    logoutUser,
    registerUser,
    userMe,
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", authMiddleware, userMe);
export default router;