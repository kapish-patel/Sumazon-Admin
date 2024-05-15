import { createBrowserRouter} from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import UserLogin from "./components/loginRegister/Userlogin";
import UserRegister from "./components/loginRegister/Userregister";
import LoginLayout from "./layouts/loginlayout";
import PrivateRoute from "./PrivateRoute";

// Nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <PrivateRoute element={Dashboard} redirect={'/login'} />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "*",
            element: <NotFound />,
          }
        ]
      },
      {
        path: "login",
        element: <LoginLayout />,
        children: [
          {
            path: "",
            element: <UserLogin />,
          },
          {
            path: "*",
            element: <NotFound />,
          }
        ]
      },
      {
        path: "/register",
        element: <LoginLayout />,
        children: [
          {
            path: "",
            element: <UserRegister />,
          },
          {
            path: "*",
            element: <NotFound />,
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  }
]);

export default AppRouter;