import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/sign_in",
      element: <Signin/> ,
    },
    {
      path: "/sign_up",
      element: <Signup/> ,
    },
  ]);

export default router