import { Request, RequestHandler, Response } from "express";
import { DeviceType, FileType } from "../utils/device.enums";
import Device from "../models/device.model";

export const addDevice = async (req: Request, res: Response) => {
    try {
        const { name, deviceType, fileType, userId } = req.body;

        if (!name || !deviceType || !fileType || !userId) {
            res.status(400).json({
                success: false,
                message: "All fields are required to add a new device",
            });
            return;
        }

        if (!Object.values(DeviceType).includes(deviceType)) {
            res.status(400).json({ message: "Invalid device type" });
            return;
        }

        if (!Object.values(FileType).includes(fileType)) {
            res.status(400).json({ message: "File type" });
            return;
        }

        const count = await Device.countDocuments();
        const deviceID = `DEV-${count + 1}`;
        const device = await Device.create({
            name,
            userId,
            deviceType,
            fileType,
            deviceID,
        });

        res.status(200).json({
            success: true,
            message: "Device added successfully",
            device: device,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error adding deivce",
        });
        return;
    }
};

export const devices = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;

        const userDevices = await Device.find({ userId }).select("_id name deviceType fileType deviceID createdAt");

        res.status(200).json(userDevices);
        return;
    } catch (error) {
        console.error("Error fetching devices:", error);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
};
