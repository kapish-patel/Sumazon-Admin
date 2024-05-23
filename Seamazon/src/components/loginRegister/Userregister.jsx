import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../Redux/slice/userSlice";
import { Navigate, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Userregister.css";

function UserRegister() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  const isRegistered = useSelector((state) => state.user.isRegistered);
  const registrationError = useSelector((state) => state.user.registrationError);

  // state variables
  const [email, setUserEmail] = useState("");
  const [name, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegisterBtnClick = (e) => {
    // prevent form from submitting
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else {
      dispatch(
        addNewUser({ userEmail: email, userName: name, userPassword: password })
      );
    }

    // clear form fields
    setUserEmail("");
    setUserName("");
    setUserPassword("");
    setConfirmPassword("");
  };

  if (isLoggedin) {
    return <Navigate to="/" />;
  }

  if (isRegistered) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="register-container">
      <div className="register-form-container">
        <p>Sign up</p>
        <form className="register-form" method="post">
          {registrationError && <p className="error-message">{registrationError}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={handleRegisterBtnClick}>
            Register
          </button>
        </form>
      </div>
      <div className="register-container">
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
}

export default UserRegister;
