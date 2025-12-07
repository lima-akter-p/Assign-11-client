import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';


const AuthLayout = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <ToastContainer></ToastContainer>
            <Logo></Logo>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default AuthLayout;