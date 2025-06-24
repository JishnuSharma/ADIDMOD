import axiosInstance from "../utils/axiosInstance";

const base_url = import.meta.env.VITE_BACKEND_URI + '/api/devices';

export const addDevice = async (formData:{
    name: string,
    deviceType: string,
    fileType: string,
    userId: string,
}) => {
    const response = await axiosInstance.post(`${base_url}/add`,formData);
    return response.data; 
}

export const getDevices = async () => {
    const response = await axiosInstance.get(`${base_url}/`);
    return response.data;
}