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
import UserManagement from "../pages/Dashboard users/UserManagement/UserManagement";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import EditContest from "../pages/Dashboard creator/EditContests/EditContests";
import AdminRoute from "./AdminRoute";
import ManageContest from "../pages/Dashboard users/ManageContest";
import MyParticipatedContests from "../pages/Dashboard creator/MyPaticipatedContest/MyParticipatedContest";
import MyWinningContests from "../pages/Dashboard creator/MyWinningContest/MyWinningContest";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContacUs/ContacUs";

import FAQ from "../Components/FAQ/FAQ";
import TermsAndConditions from "../Components/TermsAndCondition/TermsAndCodition";
import MyProfile from "../pages/Dashboard creator/MyProfile/MyProfile";
import PrivacyPolicy from "../Components/PrivacyAndPolicy/PrivacyAndPolicy";
import Support from "../Components/Support/Support";

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
        path: "about-us",
        element:<AboutUs></AboutUs>

      },
      {
        path:"contac-us",
        element:<ContactUs></ContactUs>
      },
      {
        path:"terms-condition",
        element:<TermsAndConditions></TermsAndConditions>
      },
      {

        path:"privecy-policy",
        element:<PrivacyPolicy></PrivacyPolicy>

      },
      {

        path:"support",
        element:<Support></Support>

      },

      {
        path:"faq",
        element:<FAQ></FAQ>
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
        element: <AllContests></AllContests>
          
        
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

        path:'payment-history',
        Component:PaymentHistory

      },

      {

        path:"users-management",
        element:<AdminRoute><UserManagement></UserManagement></AdminRoute>
      },
      {
        path:"manage-contest",
        element:<AdminRoute><ManageContest></ManageContest></AdminRoute>
      },
      {
        path:'participated-contest',
        element:<MyParticipatedContests></MyParticipatedContests>

      },

       {
        path: "submissions/:id",
        element: <SubmittedTasks></SubmittedTasks>,
       },
       {
        path:'edit-contest/:id',
        element:<EditContest></EditContest>
       },
       {
        path:'winning-contest',
        element:<MyWinningContests></MyWinningContests>
       }, 
       {
        path:'my-profile',
        element:<MyProfile></MyProfile>

       }
    
    ],
  },
]);
