import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router";

export default function SubmittedTasks() {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selected, setSelected] = useState(null);
  const { id } = useParams();

  const {
    data: submissions = [],
    isLoading,
   
  } = useQuery({
    queryKey: ["submissions", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/submissions?contestId=${id}`);
      return res.data;
    },
  });
  const { data: contests = {} , refetch} = useQuery({

    queryKey: ["contests", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
  });
  if (isLoading) return;

  const handleDeclareWinner = async (sub) => {
    const confirm = await Swal.fire({
      title: "Declare winner?",
      text: "You can declare only one winner for this contest",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, declare",
    });

    if (!confirm.isConfirmed) return;
    const setWinner = {
      winnerEmail: sub.submissionEmail,
      isDeclear: true,
    };

    const res = await axiosSecure.put(`/declare-winner/${id}`, setWinner);

    if (res.data.modifiedCount > 0) {
      Swal.fire("Winner Declared!", "", "success");
      setSelected(null);
      refetch();
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Submitted Tasks</h1>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Participant</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Submission</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub._id} className="text-center">
                <td className="p-3 border">{sub.submissionName}</td>
                <td className="p-3 border">{sub.submissionEmail}</td>
                <td className="p-3 border">
                  <button
                    className="text-blue-600 underline"
                    onClick={() => setSelected(sub)}
                  >
                    View
                  </button>
                </td>
                <td className="p-3 border">
                  {contests.winnerEmail === sub.submissionEmail ? (
                    <span className="text-green-600 font-semibold">Winner</span>
                  ) : (
                    contests.isDeclear || (
                      <button
                        onClick={() => handleDeclareWinner(sub)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Declare Winner
                      </button>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-3 text-xl"
            ></button>

            <h2 className="text-xl font-bold mb-4">Submission Details</h2>

            <p className="mb-2">
              <b>Name:</b> {selected.submissionName}
            </p>
            <p className="mb-2">
              <b>Email:</b> {selected.submissionEmail}
            </p>

            <div className="mt-4">
              <p className="font-semibold mb-1">
                Submitted Task:{selected.task}
              </p>
            </div>

            {/* {!selected.isWinner && (
              <button
                onClick={() => handleDeclareWinner(selected)}
                className="mt-5 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Declare Winner
              </button>
            )} */}
            {contests.winnerEmail === selected.submissionEmail ? (
              <span className="text-green-600 font-semibold">Winner</span>
            ) : (
              contests.isDeclear || (
                <button
                  onClick={() => handleDeclareWinner(selected)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Declare Winner
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
