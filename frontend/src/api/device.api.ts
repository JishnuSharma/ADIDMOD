import axiosInstance from "../utils/axiosInstance";

const base_url = import.meta.env.VITE_BACKEND_URI + "/api/devices";

export const addDevice = async (formData: {
    name: string;
    deviceType: string;
    fileType: string;
}) => {
    const response = await axiosInstance.post(`${base_url}/add`, formData);
    return response.data;
};

export const getDevices = async (query?:string) => {
    const response = await axiosInstance.get(`${base_url}/`,{
        params: query ? { search: query } : {},
    });
    return response.data;
};

export const updateDevice = async (formData: {
    name: string;
    deviceType: string;
    fileType: string;
    deviceId: string;
}) => {
    const response = await axiosInstance.put(`${base_url}/update`, formData);
    return response.data;
};
