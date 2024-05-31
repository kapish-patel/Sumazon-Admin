import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../Redux/slice/userSlice";
import "../common/common.css";
import "./User.css";

function UserProfile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userDetails);
  const updateError = useSelector((state) => state.user.updateError); // Fetching update error from Redux state

  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [password, setPassword] = useState(''); // Added password state to manage password change [Not implemented in this snippet
  // const [error, setError] = useState(updateError); // Local state to manage error message display

  const handleSaveBtnClick = () => {
    dispatch(
      editUser({
        userName: userName,
        email: email,
        originalEmail: user.email,
        phoneNumber: phoneNumber,
        id: user.user_id,
        password: password,
      })
    );

    //clear password field
    setPassword('');
    setIsEditing(false);
  };

  return (
    <div className="main-content-container">
      <div className="user-header saveBtn">
        <button onClick={() => setIsEditing(!isEditing)}>
          <FontAwesomeIcon icon={faPenToSquare} /> Edit
        </button>
      </div>
      <div className="user-content">
        <Avatar
          alt="Profile Avatar"
          src="/static/images/avatar/1.jpg" // Replace with actual avatar source
          className="avatar"
          sx={{ width: 65, height: 65 }}
        />
        <div className="info-section">
          <input
            type="text"
            className={isEditing ? "info-input" : "info"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="info-section">
          <p>Email:</p>
          <input
            type="email"
            className={isEditing ? "info-input" : "info"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="info-section">
          <p>Phone Number:</p>
          <input
            type="tel"
            className={isEditing ? "info-input" : "info"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="info-section">
          <p>Password:</p>
          <input
            type="tel"
            className={isEditing ? "info-input" : "info"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {updateError && <p className="error-message">{updateError}</p>} 
        {isEditing ? (
          <button className="save-button" onClick={handleSaveBtnClick}>
            Save
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default UserProfile;
