import { createBrowserRouter } from "react-router";
import Rootlayouts from "../Layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Creator from "../pages/Creator/Creator";
import NotFound from "../pages/NotFound/NotFound";
import ContestDetails from "../pages/ContestDetails/ContestDetails";
import AllContests from "../pages/AllContests/AllContests";

import SubmittedTasks from "../pages/Dashboard creator/SubmittedTasks/SubmittedTasks";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddContests from "../pages/Dashboard creator/AddContests/AddContests";
import MyCreatedContests from "../pages/Dashboard creator/MyCreatedContests/MyCreatedContests";
// import Payment from "../pages/Payment/Payment";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentCanceled from "../pages/Payment/PaymentCanceled";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "creator",
        element: (
          <PrivateRoute>
            <Creator></Creator>
          </PrivateRoute>
        ),
      },
      {
        path: "view-details/:id",
        element: (
          <PrivateRoute>
            <ContestDetails></ContestDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "all-contests",
        element: (
          <PrivateRoute>
            <AllContests></AllContests>
          </PrivateRoute>
        ),
      },
      // {
        
      //   path:'payment/:contestId',
      //    element:<Payment></Payment>

      // },
      {

        path:'payment-success',
        Component:PaymentSuccess

      },
      {

        path:'payment-cancelled',
        Component:PaymentCanceled

      },
      {
        path: "submissions",
        element: (
          <PrivateRoute>
            <SubmittedTasks></SubmittedTasks>
          </PrivateRoute>
        ),
      }
      // {
      //   path:'/add-contests',
      //   element:<PrivateRoute><AddContests></AddContests></PrivateRoute>
      // },
      // {
      //   path:'/my-contests',
      //   element:<PrivateRoute></PrivateRoute>
      // },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-contests",
        element: <AddContests></AddContests>,
      },
      {
        path: "my-contests",
        element: <MyCreatedContests></MyCreatedContests>,
      },

       {
        path: "submissions",
        element: <SubmittedTasks></SubmittedTasks>,
       }
    
    ],
  },
]);
