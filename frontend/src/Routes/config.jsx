import Dashboard from "../pages/Dashboard";
import Initiate from "../pages/Initiate";
import Followers from "../pages/Followers";
import Follows from "../pages/Follows";
import Feed from "../pages/Feed";

const routesConfig = {
  dashboard: {
    path: "dashboard",
    element: <Dashboard />,
  },
  feed: {
    path: "/feed/:username/:id",
    element: <Feed />,
  },
  followers: {
    path: "/followers",
    element: <Followers />,
  },
  follows: {
    path: "/follows",
    element: <Follows />,
  },
  login: {
    path: "/",
    element: <Initiate />,
  },
};

export default routesConfig;
