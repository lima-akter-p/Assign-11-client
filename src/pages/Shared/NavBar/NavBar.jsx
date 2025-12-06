import { useState } from "react";
import { Link } from "react-router";
import logoImg from "../../../assets/logo.png";
import useAuth from "../../../Hooks/useAuth";

export default function NavBar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // const user = {
  // name: "Lima Akter",
  // photo: "https://i.ibb.co/7kV3ZCw/user.png",
  // };

  return (
    


    <nav className="w-full shadow-md bg-white px-4 py-3 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logoImg} alt="Logo" className="w-8 h-8" />
        <span className="font-semibold text-lg text-violet-800">
          ContestHub
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-base">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/contests" className="hover:text-blue-500">
          All Contests
        </Link>
        <Link to="/extra" className="hover:text-blue-500">
          Extra Section
        </Link>
      </div>

      {user && (
        <div className="relative hidden md:block">
          <div className="flex gap-6">
            <img
            src={user.photo}
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          />
          {
            user?<button className="btn bg-violet-600 text-white">Logout</button> :
             <button className="btn bg-violet-600 text-white">Login</button>
            
          }

          </div>
          {profileOpen && (
            <div className="absolute right-0 bg-white shadow-lg rounded-lg w-40 mt-2 py-2 z-50">
              <p className="px-4 py-2 font-semibold">{user.name}</p>
              <Link
                className="px-4 py-2 block hover:bg-gray-100"
                to="/dashboard"
              >
                Dashboard
              </Link>
              <button className="px-4 py-2 w-full text-left hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      )}
      {/* Profile (CLICK dropdown) */}

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
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/contests" className="hover:text-blue-500">
            All Contests
          </Link>
          <Link to="/extra" className="hover:text-blue-500">
            Extra Section
          </Link>

          {/* Mobile Profile */}
          {user && (
            <div className="mt-4 border-t pt-4 flex items-center gap-3">
              <img
                src={user.photo}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{user.name}</span>
            </div>
          )}

          <Link className="px-1 py-2 hover:text-blue-500" to="/dashboard"> 
            Dashboard
          </Link>
          <button className="text-left px-1 py-2 hover:text-blue-500">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
