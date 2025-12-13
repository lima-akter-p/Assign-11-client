import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure();
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get('session_id')
    console.log(searchParams);
    const contestId = searchParams.get("contestId")


    useEffect(() =>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res =>{
                console.log(res.data)
                setPaymentInfo({
                    transectionId:res.data.transectionId

                })
            })

        }


    },[axiosSecure,sessionId])
    return (
        <div>
            
            <h2 className='text-4xl'>Payment successfull</h2>
            <p>Your TransectionId:{paymentInfo.transectionId
}</p>
            <Link className='btn btn-primary' to={`/view-details/${contestId}`}>Back to contest details page</Link>
            
            
        </div>
    );
};

export default PaymentSuccess;