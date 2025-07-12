import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { JSX } from "react";
import Loader from "../shared/Loader";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user, loading } = useUser();

    if (loading) return <Loader/>;

    return user ? children : <Navigate to="/get-started" replace />;
};

export default PrivateRoute;