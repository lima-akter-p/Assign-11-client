import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Rootlayouts = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <ToastContainer></ToastContainer>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayouts;