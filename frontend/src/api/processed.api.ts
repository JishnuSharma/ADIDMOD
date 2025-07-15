import axiosInstance from "../utils/axiosInstance";

const base_url = import.meta.env.VITE_BACKEND_URI + "/api/process";

export const getPreviousProcessedData = async (deviceId: string) => {
    const response = await axiosInstance.get(`${base_url}`, {
        params: { deviceId },
    });
    return response.data;
};

export const setProcessedData = async (formData: {
    filePath: string,
    dataType: string,
    maxValue: number,
    minValue: number,
    acceptablePercentage: number
}) => {
    const response = await axiosInstance.post(`${base_url}/add`, formData);
    return response.data;
};
