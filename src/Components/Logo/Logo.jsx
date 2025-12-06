import React from 'react';
import logoImg from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex gap-2'>
            <img className='h-8 w-8' src={logoImg} alt="" />
            <h3 className='text-2xl font-bold text-violet-700'>ContestHub</h3>
        </div>
    );
};

export default Logo;