import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FaMedal, FaPlusCircle, FaRegCreditCard, FaUser } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ToastContainer } from "react-toastify";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const { role } = useRole();
  console.log(role);
  return (
    <div className="drawer lg:drawer-open">
      <ToastContainer></ToastContainer>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">ContestsHub Dashboard</div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
        {/* <div className="p-4">Page Content</div> */}
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* our dashboard links */}
            {role === "creator" && (
              <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My contest"
                    to="/dashboard/my-contests"
                  >
                    <span>
                      <FaTrophy></FaTrophy>
                    </span>
                    <span className="is-drawer-close:hidden"> My Contests</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Add Contest"
                    to="/dashboard/add-contests"
                  >
                    <span>
                      <FaPlusCircle></FaPlusCircle>
                    </span>
                    <span className="is-drawer-close:hidden">
                      {" "}
                      Add Contests
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {role === "user" && (
              <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip=" My Parcicipated Contest"
                    to="/dashboard/participated-contest"
                  >
                    <span>
                      <FaTrophy></FaTrophy>
                    </span>
                    <span className="is-drawer-close:hidden">
                      {" "}
                      My Parcicipated Contest
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Payment History"
                    to="/dashboard/payment-history"
                  >
                    <span>
                      <FaRegCreditCard />
                    </span>
                    <span className="is-drawer-close:hidden">
                      {" "}
                      Payment History
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Winning Contest"
                    to="/dashboard/winning-contest"
                  >
                    <span>
                      <FaMedal />
                    </span>
                    <span className="is-drawer-close:hidden">
                      {" "}
                      My Winning Contest
                    </span>
                  </NavLink>
                </li>

                   <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Profile"
                    to="/dashboard/my-profile"
                  >
                    <span>
                     <CgProfile />
                    </span>
                    <span className="is-drawer-close:hidden">
                      {" "}
                      My Profile
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {role === "admin" && (
              <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Users Management"
                    to="/dashboard/users-management"
                  >
                    <span>
                      <FaUser></FaUser>
                    </span>
                    <span className="is-drawer-close:hidden">
                      {" "}
                      Users Manage
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Contest"
                    to="/dashboard/manage-contest"
                  >
                    <span>
                      <FaTrophy></FaTrophy>
                    </span>
                    <span className="is-drawer-close:hidden">
                      {" "}
                      Manage Contest
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {/* List item */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
