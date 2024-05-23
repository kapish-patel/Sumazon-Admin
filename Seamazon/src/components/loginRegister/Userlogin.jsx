import { Navigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Redux/slice/userSlice";
import { useState } from "react";
import "./Userlogin.css";

function UserLogin() {
  const dispatch = useDispatch();

  // Accessing the authentication state and error message from Redux store
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  const loginError = useSelector((state) => state.user.loginError);

  // State to store the user input and error message
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogInBtnClick = (e) => {
    e.preventDefault();
    dispatch(loginUser({ userEmail, userPassword }));
    //clear form fields
    setUserEmail("");
    setUserPassword("");
  };

  return isLoggedin ? (
    <Navigate to="/" />
  ) : (
    <div className="login-container">
      <div className="login-form">
        <p>Sign In</p>
        <form method="post">
          {loginError && <p className="error-message">{loginError}</p>}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={userPassword}
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
