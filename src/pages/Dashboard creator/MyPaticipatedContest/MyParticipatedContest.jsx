import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function MyParticipatedContests() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["myParticipatedContests", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments/participated?email=${user.email}`
      );

      return Array.isArray(res.data)
        ? res.data
        : res.data?.data || [];
    },
  });

  // 
  const safeContests = Array.isArray(contests) ? contests : [];

  const sortedContests = safeContests.sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Participated Contests</h2>

      {sortedContests.length === 0 ? (
        <p className="text-gray-500">
          You have not participated in any contests yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Contest Name</th>
                <th>Price</th>
                <th>Payment Status</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {sortedContests.map((contest, index) => (
                <tr key={contest._id}>
                  <td>{index + 1}</td>
                  <td>{contest.contestName}</td>
                  <td>${contest.amount}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded text-white text-sm ${
                        contest.paymentStatus === "paid"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {contest.paymentStatus}
                    </span>
                  </td>
                  <td>
                    {contest.deadline
                      ? new Date(contest.deadline).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


// import React from "react";
// import { useQuery } from "@tanstack/react-query";

// import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// export default function MyParticipatedContests() {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();

//   const { data: contests = [], isLoading } = useQuery({
//     queryKey: ["myParticipatedContests", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/payments/participated?email=${user.email}`);
//       // return res.data;
//        return Array.isArray(res.data)
//       ? res.data
//       : res.data?.data || [];
//     },
//   });

// //   sort by upcoming deadline (nearest first)
//   const sortedContests = [...contests].sort(
//     (a, b) => new Date(a.deadline) - new Date(b.deadline)
//   );


//   if (isLoading) {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">My Participated Contests</h2>

//       {sortedContests.length === 0 ? (
//         <p className="text-gray-500">You have not participated in any contests yet.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full border">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th>#</th>
//                 <th>Contest Name</th>
//                 <th>Price</th>
//                 <th>Payment Status</th>
//                 <th>Deadline</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedContests.map((contest, index) => (
//                 <tr key={contest._id}>
//                   <td>{index + 1}</td>
//                   <td>{contest.contestName}</td>
//                   <td>${contest.amount}</td>
//                   <td>
//                     <span
//                       className={`px-3 py-1 rounded text-white text-sm ${
//                         contest.paymentStatus === "paid"
//                           ? "bg-green-500"
//                           : "bg-red-500"
//                       }`}
//                     >
//                       {contest.paymentStatus}
//                     </span>
//                   </td>
//                   <td>{new Date(contest.deadline).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
