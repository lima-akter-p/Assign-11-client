import { useQuery } from "@tanstack/react-query";
import React from "react";


import { Link } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import Loading from "../../Components/Loading/Loading";

const AllContests = () => {
    
     const axiosSecure = useAxiosSecure();
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["allContests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests?status=approved");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
    return (
         <div className=" mt-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {contests.map((item) => (
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
     
    );
};

export default AllContests;