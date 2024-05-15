import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ element: Component, redirect}) {
    return useSelector(state => state.user.isLoggedIn) ? <Component /> : <Navigate to={redirect} />;
}

export default PrivateRoute;
