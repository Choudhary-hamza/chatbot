import { Link } from "react-router-dom";
import "../styling/Sidebar.css";
import { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { IoAnalytics } from "react-icons/io5";
import { MdEmergencyShare } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const [currentBar, updateBar] = useState("dashboard");
  const buttonClicked = (value) => {
    updateBar(value);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebarMain"
      style={{
        width: "240px",
        height: "730px",
        position: "fixed",
      }}
    >
      <ul className="nav nav-pills flex-column mb-auto first_part">
        <li className="nav-item">
          <Link
            to="/user/dashboard"
            className={`nav-link link-body-emphasis ${
              currentBar === "dashboard" ? "active" : ""
            }`}
            aria-current="page"
            onClick={() => buttonClicked("dashboard")}
          >
            <MdOutlineSpaceDashboard size={"22px"} className="me-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/user/history"
            className={`nav-link link-body-emphasis ${
              currentBar === "history" ? "active" : ""
            }`}
            onClick={() => buttonClicked("history")}
          >
            <MdHistory size={"22px"} className="me-2" />
            History
          </Link>
        </li>
        <li>
          <Link
            to="/user/resource"
            className={`nav-link link-body-emphasis ${
              currentBar === "resources" ? "active" : ""
            }`}
            onClick={() => buttonClicked("resources")}
          >
            <GrResources size={"22px"} className="me-2" />
            Resources
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            className={`nav-link link-body-emphasis ${
              currentBar === "analytics" ? "active" : ""
            }`}
            onClick={() => buttonClicked("analytics")}
          >
            <IoAnalytics size={"22px"} className="me-2" />
            User analytics
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            className={`nav-link link-body-emphasis ${
              currentBar === "emergency" ? "active" : ""
            }`}
            onClick={() => buttonClicked("emergency")}
          >
            <MdEmergencyShare size={"22px"} className="me-2" />
            Emergency
          </Link>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-auto second_part">
        <li className="nav-item">
          <Link
            to="/user/profile"
            className={`nav-link link-body-emphasis ${
              currentBar === "profile" ? "active" : ""
            }`}
            aria-current="page"
            onClick={() => buttonClicked("profile")}
          >
            <CgProfile size={"22px"} className="me-2" />
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={`nav-link link-body-emphasis ${
              currentBar === "logOut" ? "active" : ""
            }`}
            onClick={() => buttonClicked("logOut")}
          >
            <CiLogout size={"22px"} className="me-2" />
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
