import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import Login from "./Login";

const AuthGuard = () => {
    let authToken = useSelector((store) => store.auth.authToken);
    if(!authToken && sessionStorage.getItem('authToken')) {
        authToken = sessionStorage.getItem('authToken');
    }
    return !authToken ? <Navigate to="/login" replace /> :  <Outlet />
}

export default AuthGuard;