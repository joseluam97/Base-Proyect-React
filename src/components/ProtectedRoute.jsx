import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user && location.pathname !== "/auth/login") {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
