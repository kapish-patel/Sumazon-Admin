import { useDispatch } from "react-redux";
import { addNewUser } from "../../Redux/slice/userSlice";
import { Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState,} from "react";
import "./Userregister.css";

function UserRegister() {

  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  
  // state variables
  const [email, setUseremail] = useState("");
  const [name, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegister] = useState(false);
  
  const handleRegisterBtnClick = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(
        addNewUser({ userEmail: email, userName: name, userPassword: password })
      );
      setIsRegister(true);
    }
  };

  return isLoggedin ? <Navigate to="/" /> :
  isRegistered ? <Navigate to='/login'/> :
  (
    <div className="register-container">
      <div className="register-form-container">
        <p>Sign up</p>
        <form className="register-form" method="post">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setUseremail(e.target.value);
            }}
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
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
