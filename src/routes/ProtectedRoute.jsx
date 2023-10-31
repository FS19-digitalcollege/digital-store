import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const { isLogged } = useContext(AuthContext);
    return isLogged ? children : <Navigate to={'/'} />
}

export default ProtectedRoute;