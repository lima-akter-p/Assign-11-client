
import React from "react";
import Lottie from "lottie-react";
import forbiddenAnimation from "../../assets/forbidden403.json"; 
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <Lottie
        animationData={forbiddenAnimation}
        loop={false}
        style={{ width: 220, height: 220 }}
      />

      <h1 className="text-3xl font-bold text-red-500 mt-4 ">
        You are forbidden to access this page
      </h1>

      <p className="text-gray-600 mt-2">
        Please contact the administrator if you believe this is an error.
      </p>

      <div className="flex gap-2 mt-3">
        <Link to='/'><button className="btn bg-red-800 text-white ">Go to home</button></Link>
      <Link to='/dashboard'><button className="btn bg-green-800 text-white">Go to Dashboard</button></Link>
      
      </div>

       
    </div>
  );
};

export default Forbidden;



