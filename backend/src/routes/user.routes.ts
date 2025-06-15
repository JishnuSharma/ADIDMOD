import express from "express";
import { getAllUsers, registerUser } from "../controllers/user.controller";

const router = express.Router();

router.post('/register',registerUser);
router.post('/register',getAllUsers);
// router.post('/login',loginUser);
export default router;