import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign_in from "./components/Sign_in.jsx";
import Sign_up from "./components/Sign_up.jsx";
import { to_sign_in } from "./components/Sign_up.jsx";
import User from "./User.jsx";
import { to_User } from "./components/Sign_in.jsx";
import Profile from "./components/Profile.jsx";
import Resource from "./components/Resource.jsx";
import { UserContextProvider } from "./components/UserProvider.jsx";
import Dashboard from "./components/Dahboard.jsx";
import History from "./components/History.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <Sign_in />,
    action: to_User,
  },
  {
    path: "/sign-up",
    element: <Sign_up />,
    action: to_sign_in,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/user/resource",
        element: <Resource />,
      },
      {
        path: "/user/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/history",
        element: <History />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
