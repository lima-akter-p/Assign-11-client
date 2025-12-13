import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


export default function SubmittedTasks() {
  const { id } = useParams(); // contestId
  const axiosSecure = useAxiosSecure();

  const { data: submissions = [] } = useQuery({
    queryKey: ["submissions", id],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:3000/dashboard/submissions/${id}`
      );
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Submitted Tasks</h1>

      <div className="grid gap-4">
        {submissions.map((sub) => (
          <div key={sub._id} className="border p-4 rounded">
            <p className="font-semibold">Participant: {sub.name}</p>
            <p>Email: {sub.email}</p>

            <Link
              to={`/submission/${sub._id}`}
              className="text-blue-500 underline"
            >
              View Submission
            </Link>
          </div>
        ))}

        {submissions.length === 0 && (
          <p className="text-gray-500">No submissions yet.</p>
        )}
      </div>
    </div>
  );
}
