import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


export default function ManageContests() {
    const axiosSecure = useAxiosSecure();
  

  const { data: contests = [], refetch, isLoading } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });

  const handleConfirm = async (id) => {
    const res = await axiosSecure.patch(`/contests/confirm/${id}`);
    if (res.data.modifiedCount > 0) {
      Swal.fire("Approved!", "Contest has been confirmed", "success");
      refetch();
    }
  };

  const handleReject = async (id) => {
    const res = await axiosSecure.patch(`/contests/reject/${id}`);
    if (res.data.modifiedCount > 0) {
      Swal.fire("Rejected!", "Contest has been rejected", "info");
      refetch();
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This contest will be permanently deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
    });

    if (result.isConfirmed) {
      const res = await axiosSecure.delete(`/contests/delete/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire("Deleted!", "Contest has been deleted", "success");
        refetch();
      }
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Contests</h2>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Contest Name</th>
              <th>Creator</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr key={contest._id}>
                <td>{index + 1}</td>
                <td>{contest.contestName}</td>
                <td>{contest.email}</td>
                <td>${contest.priceMoney}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded text-white text-sm ${
                      contest.status === "approved"
                        ? "bg-green-500"
                        : contest.status === "reject"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {contest.status}
                  </span>
                </td>
                <td className="space-x-2">
                  <button
                    disabled={contest.status === "approved"}
                    onClick={() => handleConfirm(contest._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
                  >
                    Confirm
                  </button>

                  <button
                    disabled={contest.status === "rejected"}
                    onClick={() => handleReject(contest._id)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded disabled:opacity-50"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => handleDelete(contest._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
