import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
}

export const registerUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400).json({
            success: false,
            message:
                "User information needs to be complete for the registration process",
        });
        return;
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({
                success: false,
                message: "Email is already in use",
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            firstName,
            lastName,
            password: hashedPassword,
        });

        if (!user) {
            res.status(500).json({
                success: false,
                message: "User could not be created",
            });
            return;
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        res.status(201).json({
            success: true,
            message: "User created successfully",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
        return;
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            success: false,
            message: "Error creating user! Try again later",
        });
        return;
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            success: false,
            message: "Email and password are required to login",
        });
        return;
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found with the given email",
            });
            return;
        }

        const isCorrect = await bcrypt.compare(password, user.password);

        if (!isCorrect) {
            res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
            return;
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
        return;
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong during login",
        });
        return;
    }
};

export const logoutUser = (req: Request, res: Response) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
    return;
};

export const userMe = (req: AuthenticatedRequest, res: Response): void => {
    const user = req.user;

    if (user) {
        res.status(200).json({
            success: true,
            user,
        });
    } else {
        res.status(401).json({
            success: false,
            message: "Not authenticated",
        });
    }
};