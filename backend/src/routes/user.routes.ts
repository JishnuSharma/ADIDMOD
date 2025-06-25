import express from "express";
import {
    loginUser,
    logoutUser,
    registerUser,
    updateProfile,
    userDetails,
    userMe,
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", authMiddleware, userMe);
router.get("/details", authMiddleware, userDetails);
router.post("/update", authMiddleware, updateProfile);
export default router;