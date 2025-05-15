import { useState } from "react";
import Input from "../shared/form/Input";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const RegisterForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case "firstName":
                if (!value.trim()) return "First name is required";
                return;
            case "lastName":
                if (!value.trim()) return "Last name is required";
                return;
            case "email":
                if (!value.trim()) return "Email is required";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return "Invalid email address";
                return;
            case "password":
                if (!value) return "Password is required";
                if (value.length < 6)
                    return "Password must be at least 6 characters";
                return;
            case "confirmPassword":
                if (!value) return "Please confirm your password";
                if (value !== formData.password)
                    return "Passwords do not match";
                return;
            default:
                return;
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setFormErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));
    };

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const errors: FormErrors = {};
        (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) errors[key] = error;
        });

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form submitted", formData);
        }
    };

    return (
        <div className="mt-20 w-5/10">
            <div className="text-center text-purple-900 text-4xl font-bold py-3">
                REGISTER WITH ADIDMOD
            </div>
            <form
                onSubmit={onSubmitHandler}
                className="w-full p-10 "
                noValidate
            >
                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <Input
                            placeholder="Enter First Name"
                            name="firstName"
                            value={formData.firstName}
                            label="First Name"
                            onChange={onChangeHandler}
                            error={formErrors.firstName}
                        />
                    </div>
                    <div className="w-1/2">
                        <Input
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={formData.lastName}
                            label="Last Name"
                            onChange={onChangeHandler}
                            error={formErrors.lastName}
                        />
                    </div>
                </div>

                <Input
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    label="Email"
                    type="email"
                    onChange={onChangeHandler}
                    error={formErrors.email}
                />
                <div className="flex gap-4 mt-4 mb-4">
                    <div className="w-1/2">
                        <Input
                            placeholder="Enter Password"
                            name="password"
                            value={formData.password}
                            label="Password"
                            type="password"
                            onChange={onChangeHandler}
                            error={formErrors.password}
                        />
                    </div>
                    <div className="w-1/2">
                        <Input
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            label="Confirm Password"
                            type="password"
                            onChange={onChangeHandler}
                            error={formErrors.confirmPassword}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-center rounded-lg hover:bg-purple-600 transition duration-300 cursor-pointer bg-purple-900 text-white text-lg mt-5"
                >
                    REGISTER
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
