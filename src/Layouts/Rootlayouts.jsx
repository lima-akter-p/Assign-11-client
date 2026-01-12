import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Rootlayouts = () => {
    return (
        <div className=''>
            <ToastContainer></ToastContainer>
            <div className='bg-amber-50 w-full sticky top-0 z-50'>
                
             <NavBar></NavBar>

            </div>
           
             <div className='max-w-[1300px] mx-auto '>
            <Outlet></Outlet>
            <Footer></Footer>

             </div>
           
          
        </div>
    );
};

export default Rootlayouts;