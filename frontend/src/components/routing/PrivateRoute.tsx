import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { JSX } from "react";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user, loading } = useUser();

    if (loading) return <div>Loading...</div>;

    return user ? children : <Navigate to="/get-started" replace />;
};

export default PrivateRoute;