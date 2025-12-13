// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { useParams } from 'react-router';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import Loading from '../../Components/Loading/Loading';

// const Payment = () => {
//     const { contestId } = useParams();
//     const axiosSecure = useAxiosSecure();

//     const { isLoading, data: contest } = useQuery({
//         queryKey: ['contest', contestId],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/contests/${contestId}`);
//             return res.data;
//         }
//     });

//     const handlePayment = async () => {
//         const paymentInfo = {
//             priceMoney: contest.priceMoney,
//             contestId: contest._id,
//             contestName: contest.contestName
//         };

//         const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
//         window.location.href = res.data.url;
//     };

//     if (isLoading) return <Loading />;

//     return (
//         <div>
//             <h2>Please pay ${contest.priceMoney} for: {contest.contestName}</h2>
//             <button onClick={handlePayment} className="btn bg-violet-500 text-white">
//                 Pay
//             </button>
//         </div>
//     );
// };

// export default Payment;


