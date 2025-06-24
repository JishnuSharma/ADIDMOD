import axiosInstance from "../utils/axiosInstance";

const base_url = import.meta.env.VITE_BACKEND_URI + '/api/users';

export const registerUser = async (formData:{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}) => {
    const response = await axiosInstance.post(`${base_url}/register`,formData);
    return response.data; 
}

export const loginUser = async (formData: {
    email: string,
    password: string,
}) => {
    const response = await axiosInstance.post(`${base_url}/login`,formData);
    return response.data; 
}

export const userMe = async () => {
    const response = await axiosInstance.get(`${base_url}/me`);
    return response.data; 
}

export const getUserDetails = async() => {
    const response = await axiosInstance.get(`${base_url}/details`);
    return response.data;
}

export const logoutUser = async () => {
    const response = await axiosInstance.post(`${base_url}/logout`);
    return response.data;
};