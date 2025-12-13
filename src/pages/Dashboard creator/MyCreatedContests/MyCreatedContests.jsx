import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function MyCreatedContests() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch contests created by this user
  const { data: contests = [], refetch } = useQuery({
    queryKey: ["myContests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:3000/my-contests?email=${user.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Delete a contest
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    await axiosSecure.delete(`http://localhost:3000/contests/${id}`);
    refetch();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Created Contests</h1>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Contest Name</th>
              <th>Participants</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contests.map((contest, index) => (
              <tr key={contest._id} className="border-b">
                <td>{index + 1}</td>

                <td className="font-semibold">{contest.contestName}</td>

                <td>{contest.participants}</td>

                <td>
                  <span
                    className={`px-3 py-1 text-white rounded text-sm
                      ${
                        contest.status === "Pending"
                          ? "bg-yellow-500"
                          : contest.status === "Confirmed"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }
                    `}
                  >
                    {contest.status}
                  </span>
                </td>

                <td>{contest.deadline}</td>

                <td className="flex gap-2">
                  {/* See Submissions */}
                  <Link
                    to={`/submissions/${contest._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    See Submissions
                  </Link>

                  {/* Edit & Delete visible ONLY if Pending */}
                  {contest.status === "Pending" && (
                    <>
                      <Link
                        to={`/edit-contest/${contest._id}`}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(contest._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}

            {contests.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No contests created yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
