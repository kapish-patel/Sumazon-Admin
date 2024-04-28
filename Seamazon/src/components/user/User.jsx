import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";
import { useState } from 'react';
import { useSelector } from "react-redux";
import "../common/common.css";
import "./User.css";

function handleSaveData() {
  console.log("Data Saved");
}

function User() {
  const user = useSelector((state) => state.user);
  
  const [isediting, setIsEditing] = useState(false);

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
            className= {isediting ? "info-input" : "info"}
            value={user.username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="info-section">
          <p>Email:</p>
          <input
            type="email"
            className= {isediting ? "info-input" : "info"}
            value={user.email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="info-section">
          <p>Phone Number:</p>
          <input
            type="tel"
            className={isediting ? "info-input" : "info"}
            value={user.phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {isediting ? <button className="save-data-btn" onClick={handleSaveData}>Save</button> : null}
      </div>
    </div>
  );
}

export default User;
