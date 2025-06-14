import { useState } from "react";
import Input from "../shared/form/Input";

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

    const [error, setErrors] = useState<FormErrors>({});

    const validateInputs = (name:string,value:string)=>{
        switch(name){
            case "email": 
                if (!value.trim()) return "Email is required";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return "Invalid email address";
                return;
            case "password":
                if (!value.trim()) return "Password is required";
        }
        
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: undefined
        }))
    };

    const submitHandler = ((e:React.FormEvent) => {
        e.preventDefault();

        const errors: FormErrors = {};

        (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
            const error = validateInputs(key, formData[key]);
            if (error) errors[key] = error;
        });

        setErrors(errors)

    })

    return (
        <div className="mt-20">
            <div className="text-center text-slate-900 text-4xl font-bold py-3 mb-7">
                LOGIN TO ADIDMOD
            </div>
            <div>
                <form onSubmit={submitHandler} noValidate>
                    <div>
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
                    <div className="mt-4">
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
                        className="w-full px-4 py-2 text-center rounded-lg hover:bg-slate-600 transition duration-300 cursor-pointer bg-slate-900 text-white text-lg mt-5"
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
