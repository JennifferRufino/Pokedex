import { createBrowserRouter } from "react-router-dom";

import {Home} from "../pages/Home"
import { List } from "../pages/List";
import { Details } from "../pages/Details";
import { Favorite } from "../pages/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

export default router;
