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

  const [isediting, setIsEditing] = useState(false);

  const [userName, setUserName] = useState(user.userName);

  const [email, setEmail] = useState(user.email);

  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleSavebtnClick = () => {
    setIsEditing(false);
    dispatch(
      editUser({
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
      })
    );
    setIsEditing(false);
  };


  return (
    <div className="main-content-container">
      <div className="user-header">
        <button onClick={() => setIsEditing(!isediting)}>
          <FontAwesomeIcon icon={faPenToSquare} /> Edit
        </button>
      </div>
      <div className="user-content">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="avatar"
          sx={{ width: 65, height: 65 }}
        />
        <div className="info-section">
          <input
            type="text"
            className={isediting ? "info-input" : "info"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="info-section">
          <p>Email:</p>
          <input
            type="email"
            className={isediting ? "info-input" : "info"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="info-section">
          <p>Phone Number:</p>
          <input
            type="tel"
            className={isediting ? "info-input" : "info"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {isediting ? (
          <button className="save-data-btn" onClick={handleSavebtnClick}>
            Save
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default UserProfile;
