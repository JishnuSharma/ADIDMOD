import { useState } from "react";
import Input from "../shared/form/Input";
import { loginUser } from "../../api/user.api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { toast } from "react-toastify";

interface FormData {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
}

const LoginForm = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const { setUser } = useUser();
    const [error, setErrors] = useState<FormErrors>({});
    const navigate = useNavigate();

    const validateInputs = (name: string, value: string) => {
        switch (name) {
            case "email":
                if (!value.trim()) return "Email is required";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return "Invalid email address";
                return;
            case "password":
                if (!value.trim()) return "Password is required";
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));
    };

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: FormErrors = {};

        (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
            const error = validateInputs(key, formData[key]);
            if (error) errors[key] = error;
        });

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const response = await loginUser({
                    email: formData.email,
                    password: formData.password,
                });

                setUser(response.user);
                toast.success("Successfully logged in!");
                navigate("/dashboard");
            } catch (err: any) {
                console.error(
                    "Login failed:",
                    err.response?.data?.message || err.message
                );
                toast.error(err.response?.data?.message || "Login failed");
            }
        }
    };

    return (
        <div className="w-[420px] mx-auto mt-20">
            <div className="text-center text-slate-900 text-4xl font-bold py-3 mb-7">
                LOGIN TO ADIDMOD
            </div>
            <form onSubmit={submitHandler} noValidate>
                <div className="mb-4">
                    <Input
                        placeholder="Enter Email"
                        name="email"
                        type="email"
                        onChange={onChangeHandler}
                        value={formData.email}
                        label="Email"
                        error={error.email}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        placeholder="Enter Password"
                        name="password"
                        type="password"
                        onChange={onChangeHandler}
                        value={formData.password}
                        label="Password"
                        error={error.password}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-center rounded-lg hover:bg-slate-600 transition duration-300 cursor-pointer bg-slate-900 text-white text-lg"
                >
                    LOGIN
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
