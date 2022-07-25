import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";


export const AuthWrapper = ({ children }) => {
    const authStatus = useSelector(store => store.authReducer.auth);
    const location = useLocation();
    if(authStatus)  return children;
    console.log("authState", authStatus);
    return <Navigate  to='/login' state={location} replace={true} />
}