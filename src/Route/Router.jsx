import { createBrowserRouter } from "react-router";
import Rootlayouts from "../Layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";


  export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayouts,
    children:[
        {
            index:true,
            Component:Home

        }
    ]
  },
]);