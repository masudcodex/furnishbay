import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../Assets/Images/homeBanner2.png'

const HomeBanner = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col md:flex-row-reverse md:justify-between md:p-0">
            <img className='md:w-6/12' src={image} alt=""/>
            <div className='w-full md:w-6/12 p-10 md:m-16'>
                <h1 className="text-5xl font-extrabold leading-normal mb-6">SELL YOUR FURNITURE FOR QUICK CASH</h1>
                <Link><button className="btn btn-primary text-white">Get Started</button></Link>
                
            </div>
        </div>
        </div>
    );
};

export default HomeBanner;