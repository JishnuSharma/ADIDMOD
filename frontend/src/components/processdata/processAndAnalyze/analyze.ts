import { analyzeData, setProcessedData, updateProcessMetrics } from "../../../api/processed.api";

export const processAndAnalyze = async (params: {
    fileName: string;
    min: number;
    max: number;
    accept: number;
    dataType: string;
    deviceId: string;
    deviceFile: File;
}) => {
    const { fileName, min, max, accept, dataType, deviceId, deviceFile } = params;

    const processed = await setProcessedData({
        filePath: `/uploads/${fileName}`,
        dataType,
        maxValue: max,
        minValue: min,
        acceptablePercentage: accept,
        deviceId,
    });

    if (!processed?.process?._id) {
        throw new Error("Failed to create processing record");
    }

    const result = await analyzeData({
        deviceFile,
        minimumValue: min,
        maximumValue: max,
        acceptablePercentage: accept,
        dataType,
    });

    if (
        !result?.success ||
        typeof result.data?.total_readings !== "number" ||
        typeof result.data?.total_anomalies !== "number" ||
        typeof result.data?.percentage_anomalies !== "number" ||
        typeof result.data?.feedback !== "string"
    ) {
        
        throw new Error(result.data.error);
    }

    const metricsUpdated = await updateProcessMetrics({
        totalReadings: result.data.total_readings,
        totalAnomalies: result.data.total_anomalies,
        percentageAnomalies: result.data.percentage_anomalies,
        deviceStatus: result.data.feedback,
        processId: processed.process._id,
    });

    if (!metricsUpdated?.success) {
        throw new Error("Failed to update process metrics");
    }

    return result.data;
};
