import axiosInstance from "../utils/axiosInstance";

const base_url = import.meta.env.VITE_BACKEND_URI + "/api/process";
const base_py_url = import.meta.env.VITE_PY_BACKEND_URI + "/iotapi";

export const getPreviousProcessedData = async (deviceId: string) => {
    const response = await axiosInstance.get(`${base_url}`, {
        params: { deviceId },
    });
    return response.data;
};

export const setProcessedData = async (formData: {
    filePath: string;
    dataType: string;
    maxValue: number;
    minValue: number;
    acceptablePercentage: number;
    deviceId: string;
}) => {
    const response = await axiosInstance.post(`${base_url}/add`, formData);
    return response.data;
};

export const analyzeData = async (formData: {
    deviceFile: File;
    minimumValue: number;
    maximumValue: number;
    acceptablePercentage: number;
    dataType: string;
}) => {
    const {
        deviceFile,
        minimumValue,
        maximumValue,
        acceptablePercentage,
        dataType,
    } = formData;

    const form = new FormData();
    form.append("csv_file", deviceFile);
    form.append("lower", minimumValue.toString());
    form.append("upper", maximumValue.toString());
    form.append("attention", acceptablePercentage.toString());
    form.append("ftype", dataType);

    console.log(form);

    const res = await axiosInstance.post(
        `${base_py_url}/detect_anomalies`,
        form,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return res.data;
};

export const updateProcessMetrics = async (formData: {
    processId: string;
    totalReadings?: number;
    totalAnomalies?: number;
    percentageAnomalies?: number;
    deviceStatus?: string;
}) => {
    const response = await axiosInstance.post(`${base_url}/update-metrics`, formData);
    return response.data;
}