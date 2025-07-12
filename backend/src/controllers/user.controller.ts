import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Device from "../models/device.model";

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

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });

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

export const userMe = (req: Request, res: Response): void => {
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

export const userDetails = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user?.id;

        if (!userId) {
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const user = await User.findById(userId).select("-password -__v");

        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
            return;
        }

        const deviceCount = await Device.countDocuments({ userId });

        const userObj = {
            ...user.toObject(),
            deviceCount,
        };

        res.status(200).json({ success: true, userObj });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    if (!req.user || !req.user.id) {
        res.status(401).json({ success: false, message: "Unauthorized" });
        return;
    }

    const userId = req.user.id;

    const {
        firstName,
        lastName,
        email,
        profession,
        phone,
        location,
        currentPassword,
        newPassword,
    } = req.body;

    if (!firstName || !lastName || !email) {
        res.status(400).json({
            success: false,
            message: "Please update the profile with the required fields",
        });
        return;
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;

        if (profession) user.profession = profession;
        if (phone) user.phone = phone;
        if (location) user.location = location;

        if (currentPassword && newPassword) {
            const isMatch = await bcrypt.compare(
                currentPassword,
                user.password
            );
            if (!isMatch) {
                res.status(401).json({
                    success: false,
                    message: "Current password is incorrect",
                });
                return;
            }

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(newPassword, salt);
        }

        await user.save();

        const { password, ...userWithoutPassword } = user.toObject();

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: userWithoutPassword,
        });
        return;
    } catch (error) {
        console.error("Update profile error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while updating profile",
        });
        return;
    }
};
