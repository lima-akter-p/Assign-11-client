import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';


const AuthLayout = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <Logo></Logo>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default AuthLayout;