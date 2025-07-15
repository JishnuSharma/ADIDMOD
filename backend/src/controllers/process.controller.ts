import { Request, Response } from "express";
import Process from "../models/process.model";

export const getPreviousProcessedData = async (req: Request, res: Response) => {
    try {
        const deviceId = req.query.deviceId?.toString().trim() || "";

        const process = await Process.findOne({ deviceId });

        res.status(200).json({
            message: "Previous device data",
            success: true,
            process,
        });
        return;
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
        return;
    }
};

export const setProcessedFields = async (req: Request, res: Response) => {
    try {
        const { filePath, dataType, maxValue, minValue, acceptablePercentage,deviceId } =
            req.body;
        
        const process = await Process.create({
            fileType: 'excel',
            deviceId: deviceId,
            dataType: dataType,
            filePath: filePath,
            maximumValue: maxValue,
            minimumValue: minValue,
            acceptablePercentage: acceptablePercentage
        })

        res.status(200).json({
            message: "Previous device data",
            success: true,
            process: process
        });
        return;
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
        return;
    }
};
