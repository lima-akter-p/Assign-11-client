import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

export default function ContestDetails() {
  const { user } = useAuth(); // logged in user
  const { id } = useParams(); // contest ID from URL

  // const [contest, setContest] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  // const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fetch contest data

  const axiosSecure = useAxiosSecure();

  const { data: contest, Loading } = useQuery({
    queryKey: ["contest", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
    enabled: !!id, // wait until id exists
  });
   const { data: participentCount } = useQuery({
    queryKey: ["participentCount", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/participent-count/${id}`);
      return res.data;
    },
    enabled: !!id, // wait until id exists
  });
     const { data: isRegistered } = useQuery({
    queryKey: ["isRegistered", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/isRegistered?id=${id}&email=${user.email}`);
      return res.data;
    },
    enabled: !!user.email, // wait until id exists
  });
   

  // Countdown timer
  useEffect(() => {
    if (!contest) return;

    const interval = setInterval(() => {
      const end = new Date(contest.deadline).getTime();
      const now = new Date().getTime();
      const diff = end - now;

      // if (contest?.paymentStatus === "paid") {
      //   setIsRegistered(true);
      // }

      if (diff <= 0) {
        setTimeLeft("Contest Ended");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        setTimeLeft(`${days}d : ${hours}h : ${mins}m : ${secs}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [contest]);

  if (!contest) return;

  const isEnded = timeLeft === "Contest Ended";

  const handlePayment = () => {
    Swal.fire({
      title: "Are you agree to pay",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const paymentInfo = {
          email:user.email,
          priceMoney: contest.priceMoney,
          contestId: contest._id,
          contestName: contest.contestName,
        };

        const res = await axiosSecure.post(
          "/create-checkout-session",
          paymentInfo
        );
        window.location.href = res.data.url;
      }
    });
  };

  // Handle Task Submission
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    const task = e.target.task.value;

    await axiosSecure.post(`/submission-task/${id}`, {
      email: user.email,
      task,
    });

    setShowModal(false);
    Swal.fire("Submitted!", "Your task is submitted.", "success");
    // alert("Task Submitted!");
  };

 
  console.log(isEnded);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      {/* Contest Name */}
      <h1 className="text-3xl font-bold mb-3">{contest.contestName}</h1>

      {/* Big Banner */}
      <img
        src={contest.image}
        className="w-full rounded-xl mb-6"
        alt={contest.name}
      />

      {/* Participants */}
      <p className="text-lg font-semibold">
        Participants: {participentCount}
      </p>

      {/* Countdown */}
      <p
        className={`text-xl font-bold mt-2 ${
          isEnded ? "text-red-600" : "text-green-600"
        }`}
      >
        {timeLeft}
      </p>

      {/* Prize Money */}
      <p className="text-lg mt-2">
        💰 Prize: <span className="font-semibold">${contest.priceMoney}</span>
      </p>

      {/* Full Description */}
      <h2 className="text-xl font-bold mt-5">Description</h2>
      <p className="text-gray-700">{contest.description}</p>

      <h2 className="text-xl font-bold mt-5">Task Details</h2>
      <p className="text-gray-700 mb-6">{contest.taskDetails}</p>

      {/* Winner Section */}
      {contest.winnerName && (
        <div className="bg-green-100 p-4 rounded-md mt-4 flex items-center gap-4">
          <img
            src={contest.winnerPhoto}
            className="w-16 h-16 rounded-full"
            alt="Winner"
          />
          <p className="text-lg font-semibold">Winner: {contest.winnerName}</p>
        </div>
      )}

      {/* Buttons Section */}
      <div className="flex flex-wrap gap-4 mt-6">
        {/* Register / Pay */}

        {/* Disabled when contest ended */}
        {isEnded ? (
          <button
            disabled
            className="px-5 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed"
          >
            Contest Ended
          </button>
        ) : isRegistered ? (
          <span className="text-green-500">Registered/payed</span>
        ) : (
          <button
            onClick={handlePayment}
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Register/Pay
          </button>
        )}

        {/* Submit Task Button (only for registered users) */}
        {isRegistered && !isEnded && (
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Submit Task
          </button>
        )}
      </div>

      {/* Task Submit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-3">Submit Your Task</h2>

            <form onSubmit={handleTaskSubmit}>
              <textarea
                name="task"
                className="w-full h-32 border rounded-md p-2"
                placeholder="Paste your links / answer here..."
                required
              ></textarea>

              <div className="flex justify-end gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
