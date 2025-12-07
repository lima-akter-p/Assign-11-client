import { createBrowserRouter } from "react-router";
import Rootlayouts from "../Layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Creator from "../pages/Creator/Creator";


  export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayouts,
    children:[
        {
            index:true,
            Component:Home

        },
        {
          path:'creator',
          element:<PrivateRoute><Creator></Creator></PrivateRoute>

        }
    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login

      },
      {
        path:'register',
        Component:Register
      }
    ]
  }
]);