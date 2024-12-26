import { useState } from "react";
import "../styling/profile.css";
import { UserContext } from "./UserProvider";
import { useContext } from "react";
const ProfileForm = () => {
  const { userData } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  const fullName = `${userData.firstName} ${userData.lastName}`;

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-form">
      <div className="profile-header">
        <div className="profile-info">
          <img
            src="https://via.placeholder.com/100" // Replace with profile image URL
            alt="Profile"
            className="profile-image"
          />
          <div>
            <h2>
              {userData?.firstName}
              {userData?.lastName}
            </h2>
            <p>{userData.email}</p>
          </div>
        </div>
        <button className="edit-button" onClick={handleEditClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <form className="form-fields">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={userData.lastName}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value="male" disabled={!isEditing}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Country</label>
            <select name="country" value={userData.state} disabled={!isEditing}>
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Language</label>
            <select name="language" value="English" disabled={!isEditing}>
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <div className="form-group">
            <label>Time Zone</label>
            <input
              type="text"
              name="timeZone"
              value="karachi"
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="form-group">
          <label>E mail</label>
          <p>{userData.email}</p>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
