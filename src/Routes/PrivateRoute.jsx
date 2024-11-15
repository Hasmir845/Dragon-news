import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
};

export default PrivateRoute;