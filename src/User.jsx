import Sidebar from "./components/Sidebar";
import Home_header from "./components/Home_header";
import { Outlet } from "react-router-dom";
const User = () => {
  return (
    <>
      <Home_header />
      <Sidebar />
      <Outlet />
    </>
  );
};
export default User;
