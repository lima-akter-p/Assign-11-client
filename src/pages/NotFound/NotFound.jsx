import React from 'react';
import pageImg from '../../assets/404img.jpg'
import { Link } from 'react-router';

const NotFound = () => {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="relative">
        {/* 404 Image */}
        <img src={pageImg} alt="404" className="w-full max-w-4xl rounded-lg" />

        {/* Button on the Image */}
        <Link
          to="/"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-5 py-2 rounded-md font-semibold shadow-lg hover:bg-red-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
    );
};

export default NotFound;