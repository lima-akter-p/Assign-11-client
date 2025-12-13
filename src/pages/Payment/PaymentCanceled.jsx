import React from 'react';
import { Link } from 'react-router';

const PaymentCanceled = () => {
    return (
        <div>
            <h2 className='text-4xl'>Payment is cancelled.Please try again</h2>

            <Link to="/payment">

            <button className='btn bg-violet-500 text-white'>Try again</button>
            </Link>
        </div>
    );
};

export default PaymentCanceled;