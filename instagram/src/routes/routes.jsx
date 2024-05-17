import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
export default routes;
