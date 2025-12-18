import React, { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

const Banner = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setSearchTerm(inputValue); // 🔥 only on button click
  };

  return (
    <>
      <section className="relative bg-linear-to-r from-purple-600 via-pink-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-violet-500 bg-opacity-30"></div>

        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Discover Exciting Contests
          </h1>

          <p className="text-lg md:text-2xl mb-10">
            Search contests by tags and participate to win amazing prizes!
          </p>

          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-4 sm:gap-0 shadow-lg rounded-lg overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search by contest tags..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="grow px-6 py-4 text-gray-800 rounded-lg sm:rounded-r-none"
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-4 font-semibold"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🔥 Result shows ONLY after button click */}
      {searchTerm && <SearchResult searchTerm={searchTerm} />}
    </>
  );
};

export default Banner;
