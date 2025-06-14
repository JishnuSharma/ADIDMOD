import { useState } from "react";
import RegisterForm from "../components/authentication/RegisterForm";
import LoginForm from "../components/authentication/LoginForm";

const Authentication = () => {
    const [isRegister, setIsRegister] = useState(true);

    const HandleOnclick = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full flex items-center justify-center">
                {isRegister ? <RegisterForm /> : <LoginForm />}
            </div>
            <div className="cursor-pointer mb-10 mt-3" onClick={HandleOnclick}>
                {isRegister ? (
                    <>
                        Already have an account?{" "}
                        <span className="text-slate-700 px-1 cursor-pointer">
                            Login
                        </span>
                    </>
                ) : (
                    <>
                        Don't have an account?{" "}
                        <span className="text-slate-700 px-1 cursor-pointer">
                            Sign Up
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default Authentication;
