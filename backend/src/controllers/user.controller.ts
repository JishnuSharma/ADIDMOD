import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs"; // Make sure to install this

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
        // Optional: check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({
                success: false,
                message: "Email is already in use",
            });
            return;
        }

        // Hash password before saving
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

        res.status(201).json({
            success: true,
            message: "User created successfully",
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


export const getAllUsers = async (_req: Request, res: Response) => {
    const users = await User.find();
    res.json(users);
};
