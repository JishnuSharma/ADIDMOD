import { Request, RequestHandler, Response } from "express";
import { DeviceType, FileType } from "../utils/device.enums";
import Device from "../models/device.model";

export const addDevice = async (req: Request, res: Response) => {
    try {
        const { name, deviceType, fileType } = req.body;
        const userId = req.user?.id;

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
        const search = req.query.search?.toString().trim() || "";

        const filter: any = { userId };

        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: "i" } },
                { deviceID: { $regex: search, $options: "i" } },
                { deviceType: { $regex: search, $options: "i" } },
            ];
        }

        const userDevices = await Device.find(filter).select(
            "_id name deviceType fileType deviceID createdAt"
        );

        res.status(200).json(userDevices);
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
};

export const editDevice = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const { deviceId, name, deviceType, fileType } = req.body;

        if (!deviceId || !userId) {
            res.status(400).json({
                success: false,
                message: "Missing parameters to update the device",
            });
            return;
        }

        const updatedDevice = await Device.findOneAndUpdate(
            { _id: deviceId, userId: userId },
            { $set: { name, deviceType, fileType } },
            { new: true }
        );

        if (!updatedDevice) {
            res.status(404).json({
                success: false,
                message: "Device not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Device updated",
            device: updatedDevice,
        });
        return;
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
        return;
    }
};
