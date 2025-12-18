import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const SearchResult = ({ searchTerm }) => {
  const [contest, setContest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm?.trim()) return;

     (true);

    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/searchContest?searchTerm=${searchTerm}`
      )
      .then((result) => {
        const data = result.data;
        setContest(Array.isArray(data) ? data : data?.data || []);
      })
      .catch(() => setContest([]))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  if (loading) {
    return <p className="text-center mt-10">Searching contests...</p>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-4xl text-violet-600 font-bold text-center">
        Search Result
      </h2>

      {contest.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No contests found for “{searchTerm}”
        </p>
      ) : (
        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {contest.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg 
              hover:shadow-2xl transition-all duration-300 
              hover:-translate-y-2 hover:scale-[1.02]
              border border-violet-100"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.contestName}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.contestName}
                </h3>
                <div className="badge badge-primary mb-3">{item?.contestType}</div>

                <p className="text-gray-600 text-sm mb-3">
                  {item.description?.slice(0, 85)}...
                </p>

                <p className="font-semibold text-violet-700 mb-4">
                  Participants: {item.participants || 0}
                </p>

                <Link to={`/view-details/${item._id}`}>
                  <button className="w-full bg-violet-600 text-white py-2.5 rounded-xl font-medium hover:bg-violet-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
