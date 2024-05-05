import { createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import UserLogin from "./components/loginRegister/Userlogin";
import UserRegister from "./components/loginRegister/Userregister";
import LoginLayout from "./layouts/loginlayout";
import PropTypes from "prop-types";
import React from "react";

const AppRouting = () => {
  // Accessing the authentication state from Redux store
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

// Private route to protect the other routes
const PrivateRoute = ({ element, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return isLoggedIn ? React.cloneElement(element, { ...rest }) : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

// Redirect to dashboard if user is already logged in
const LoginRedirect = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? (
    <Navigate to="/dashboard" replace />
  ) : null;
};

// Nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppRouting />,
  },
  {
    path: "dashboard",
    element: <PrivateRoute element={<Dashboard/>} />,
    children: [
      {
        path: "", // This is the default route for the dashboard
        element: <Home />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "*", // This will handle any other unmatched route under "/dashboard"
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <><LoginRedirect /> <LoginLayout /></>,
    children: [
      {
        path: "", // This is the default route for the login page
        element: <UserLogin />,
      },
      {
        path: "*", // This will handle any other unmatched route under "/login"
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/register",
    element: <><LoginRedirect /> <LoginLayout /></>,
    children: [
      {
        path: "", // This is the default route for the login page
        element: <UserRegister />,
      },
      {
        path: "*", // This will handle any other unmatched route under "/login"
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default AppRouter;

