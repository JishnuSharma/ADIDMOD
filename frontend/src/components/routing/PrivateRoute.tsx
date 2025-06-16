import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import { JSX } from "react";

const PrivateRoute = ({children}:{children: JSX.Element}) => {
    return isLoggedIn() ? children : <Navigate to="/get-started" replace/>;
}

export default PrivateRoute;