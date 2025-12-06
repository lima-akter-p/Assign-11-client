import React, { useState } from 'react';

const Banner = () => {
     const [searchTerm, setSearchTerm] = useState("");
      const handleSearch = (e) => 
    
        e.preventDefault();
    // Replace this with your backend search logic
    console.log("Searching for tag:", searchTerm);
    // Example: navigate(`/search?tag=${searchTerm}`)
  

  return (
    <section className="relative bg-liner-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-violet-500 bg-opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Discover Exciting Contests
        </h1>
        {/* Subheading */}
        <p className="text-lg md:text-2xl mb-10  drop-shadow-md">
          Search contests by tags and participate to win amazing prizes!
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-4 sm:gap-0 shadow-lg rounded-lg overflow-hidden"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by contest tags..."
              className="grow px-6 py-4 text-gray-800 rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 px-6 py-4 font-semibold rounded-lg sm:rounded-l-none transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 left-10 w-24 h-24 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
      </div>
    </section>
  );
    
};

export default Banner;