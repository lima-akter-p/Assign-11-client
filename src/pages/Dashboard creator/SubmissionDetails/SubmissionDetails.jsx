import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function SubmissionDetails() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: submission } = useQuery({
    queryKey: ["submissionDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:3000/dashboard/submissions/details/${id}`
      );
      return res.data;
    },
  });

  const declareWinner = async () => {
    await axios.patch(
      `http://localhost:5000/declare-winner/${submission.contestId}/${submission._id}`
    );
    alert("Winner declared!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Submission Details</h1>

      {submission && (
        <div className="border p-4 rounded space-y-2">
          <p><strong>Name:</strong> {submission.name}</p>
          <p><strong>Email:</strong> {submission.email}</p>
          <p><strong>Task Info:</strong> {submission.task}</p>

          <button
            onClick={declareWinner}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
          >
            Declare Winner
          </button>
        </div>
      )}
    </div>
  );
}
