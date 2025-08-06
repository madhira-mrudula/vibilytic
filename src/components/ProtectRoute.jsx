import { Navigate } from "react-router-dom";

export const ProtectRoute = ({ children }) => {
    if (localStorage.getItem('token') !== 'true') {
        return <Navigate to="/" replace />;
    }
    return children;
};
