import React from "react";
import { useQuery } from "@tanstack/react-query";
import {    CalendarDays, Gift, Trophy } from "lucide-react";

import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function MyWinningContests() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: wins = [], Loading } = useQuery({
    queryKey: ["myWinningContests", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/wins?email=${user.email}`);
      return res.data ;
    },
  });

  if (Loading) {
    return <Loading></Loading>
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Trophy className="text-yellow-500" /> My Winning Contests
      </h2>

      { wins.length === 0 ? (
        <p className="text-gray-500">You haven’t won any contests yet. Keep participating! 🚀</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          { Array.isArray(wins) && wins.map((win) => (
            <div
              key={win._id}
              className="rounded-2xl shadow-lg border p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{win.contestName}</h3>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Trophy size={16} /> Winner
                </span>
              </div>

              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <Gift size={18} className="text-green-600" />
                  <span className="font-semibold">Prize:</span> ${win.priceMoney}
                </p>

                {/* <p className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-blue-600" />
                  <span className="font-semibold">Declared On:</span>{" "}
                  {new Date(win.declaredAt).toLocaleDateString()}
                </p> */}
              </div>

              <div className="mt-6">
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  🎉 Congratulations!
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}