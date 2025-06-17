import axiosInstance from "../utils/axiosInstance";

const base_url = import.meta.env.VITE_BACKEND_URI + '/api/devices';

export const addDevice = async (formData:{
    name: string,
    devieType: string,
    fileType: string,
}) => {
    const response = await axiosInstance.post(`${base_url}/add`,formData);
    return response.data; 
}

export const loginUser = async (formData: {
    email: string,
    password: string,
}) => {
    const response = await axiosInstance.post(`${base_url}/login`,formData);
    return response.data; 
}