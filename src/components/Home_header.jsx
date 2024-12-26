import "../styling/header.css";
import { UserContext } from "./UserProvider";
import { useContext } from "react";
const Home_header = () => {
  const { userData } = useContext(UserContext);
  return (
    <nav className="navbar bg-body-tertiary homeHeader">
      <div className="container-fluid">
        <div className="user-text">
          <h2 className="user-name">
            Welcome! {userData?.firstName} {userData?.lastName}
          </h2>
        </div>
        <div className="user-info">
          <div className="user-details">
            <div className="user-image">
              <img src="user-image.png" alt="User Image" />
            </div>
          </div>
          <div className="notification-icon">
            <img src="bell-icon.png" alt="Notification Icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Home_header;
