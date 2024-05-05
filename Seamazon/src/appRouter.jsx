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

const AppRouting = () => {
  // Accessing the authentication state from Redux store
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

// Nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppRouting />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
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
    element: <LoginLayout />,
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
    element: <LoginLayout />,
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

