import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaStaylinked } from "react-icons/fa";
import Logo from "../../../Components/Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-white rounded p-10">
      <nav className="grid grid-flow gap-4">
        <div>
          <Logo></Logo>
        </div>
        <div  className="flex flex-col  gap-2">
        <a className="link link-hover ">About us</a>
        <a className="link link-hover">Contact</a>
        </div>
      
      </nav>
      <nav>
        <div className="grid grid-flow-col items-center gap-4">
            <BiLogoFacebookCircle className="w-10 h-10"/>

            <FaStaylinked className="w-8 h-8" />
          
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ContestHub
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
