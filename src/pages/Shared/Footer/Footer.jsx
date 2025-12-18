import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaStaylinked } from "react-icons/fa";
import Logo from "../../../Components/Logo/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-white rounded p-10">
      <nav className="grid grid-flow gap-4">
        <div>
          <Logo></Logo>
        </div>
        <div  className="flex flex-col  gap-2">
        <Link to="about-us"><a className="link link-hover ">About us</a></Link>
        <Link to="contac-us"><a className="link link-hover">Contact</a></Link>
        </div>
      
      </nav> 
      <nav>
        <div className="grid grid-flow-col items-center gap-4">
          <a href="https://www.facebook.com/lima.akther.284949" ><BiLogoFacebookCircle className="w-10 h-20"/> </a>
            
              {/* <a href="https://www.facebook.com/lima.akther.284949" className="hover:text-white transition-colors">
                            <FaFacebook />
                        </a> */}

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
