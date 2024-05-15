import { Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUser} from "../../Redux/slice/userSlice";
import { useState } from "react";
import "./Userlogin.css";

function UserLogin() {
  const dispatch = useDispatch();

  // Accessing the authentication state from Redux store
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);

  // State to store the user input
  const [userEmail, setUseremail] = useState();
  const [userPassword, setUserPassword] = useState();

  const handleLogInBtnClick = (e) => {
    e.preventDefault();
    dispatch(fetchUser({userEmail, userPassword}));
  };

  return isLoggedin ? (
    <Navigate to="/" />
  ) : (
    <div className="login-container">
      <div className="login-form">
        <p>Sign In</p>
        <form method="post">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setUseremail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleLogInBtnClick}>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="register-container">
        <p>
          Don&apos;t have an account? <NavLink to="/register">Register</NavLink>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;
