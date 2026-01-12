import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logoImg from "../../../assets/logo.png";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import Mytheme from "../../../Components/Mytheme/Mytheme";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful!");
        navigate("/");
        setProfileOpen(false);
        setOpen(false);
      })
      .catch((error) => console.log(error));
      
  };
  const navClass = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
    : "text-gray-950 hover:text-blue-500";


  

  const links = (
  <>
    <div className="flex gap-10">
      <NavLink to="/" className={navClass}>
        Home
      </NavLink>

      <NavLink to="all-contests" className={navClass}>
        All Contests
      </NavLink>

      <NavLink to="about-us" className={navClass}>
        About Us
      </NavLink>
    </div>

    {user && (
      <div className="flex gap-10">
        <NavLink to="contac-us" className={navClass}>
          Contac Us
        </NavLink>

        <NavLink to="terms-condition" className={navClass}>
          Terms And Condition
        </NavLink>
         <NavLink to="privecy-policy" className={navClass}>
          Privecy And Policy
        </NavLink>

        <NavLink to="faq" className={navClass}>
          FAQ
        </NavLink>

      </div>
    )}
    <Mytheme></Mytheme>

    
  </>
);


      

  

  return (
    <nav className=" shadow-md  px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logoImg} alt="Logo" className="w-8 h-8" />
        </Link>
        <span className="font-semibold text-2xl text-violet-800">
          ContestHub
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-base">{links}</div>

      {/* Desktop Right Side: Profile OR Login/Logout Button */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <>
            {/* Profile Dropdown */}
            <div className="relative">
              <img
                src={user.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setProfileOpen(!profileOpen)}
              />

              {profileOpen && (
                <div className="absolute right-0  shadow-lg rounded-lg w-40 mt-2 py-2 z-50">
                  <p className="px-4 py-2 font-semibold">{user.displayName}</p>
                  <Link
                    className="px-4 py-2 block hover:bg-gray-100"
                    to="/dashboard"
                    onClick={() => setProfileOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <button
                    className="px-4 py-2 w-full text-left hover:bg-gray-100"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Logout Button - Also visible beside profile */}
            <button
              onClick={handleLogOut}
              className="px-4 py-2 bg-violet-500 text-white rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-violet-600 text-white rounded-md"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col md:hidden p-4 gap-4 z-50">
          {links}

          <div className="border-t pt-4">
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{user.displayName}</span>
                </div>

                <Link
                  className="px-1 py-2 hover:text-blue-500"
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>

                <button
                  className="text-left px-1 py-2 hover:text-blue-500"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-1 py-2 hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
