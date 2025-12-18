import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";
import { Link } from "react-router";

const PopularContest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["allContests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const popular = [...contests]
    .sort((a, b) => b.participants - a.participants)
    .slice(0, 5);
  return (
    <div className="my-10">
      {/* 🔥 Header + Show All Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold text-violet-700 drop-shadow">
          ⭐ Popular Contests
        </h2>

        <Link
          to="/all-contests"
          className="
            bg-violet-600 text-white px-5 py-2 rounded-xl 
            font-medium hover:bg-violet-700 transition duration-300
            shadow hover:shadow-md
          "
        >
          Show All →
        </Link>
      </div>

      {/* 🔥 Cards */}
      <div className="mt-10  grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {popular.map((item) => (
          <div
            key={item._id}
            className="
              bg-white rounded-2xl overflow-hidden shadow-lg 
              hover:shadow-2xl transition-all duration-300 
              hover:-translate-y-2 hover:scale-[1.02]
              border border-violet-100
            "
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div
                className="
                absolute inset-0 bg-black/0 
                hover:bg-black/10 transition-all duration-300
              "
              ></div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* ✔ Contest Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {item.contestName}
              </h3>
              <div className="badge badge-primary mb-3">{item.contestType}</div>

              {/* Short Description */}
              <p className="text-gray-600 text-sm mb-3">
                {item.description.slice(0, 85)}...
              </p>

              {/* Participants */}
              <p className="font-semibold text-violet-700 mb-4">
                Participants: {item.participants}
              </p>

              <Link to={`/view-details/${item._id}`}>
            
                <button
                  className="w-full bg-violet-600 text-white py-2.5 
                  rounded-xl font-medium 
                  hover:bg-violet-700 transition-all duration-300
                  hover:shadow-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularContest;
