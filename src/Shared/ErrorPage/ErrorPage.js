import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/Images/errorbg.jpg';

const ErrorPage = () => {
    return (
        <div className='bg-white'>
            <img className='md:w-9/12 lg:w-6/12 mx-auto' src={image} alt="" />
            <p className='text-center text-xl font-semibold'>Back to<Link className='ml-4 btn btn-secondary btn-md rounded-sm text-white' to="/">Home</Link></p>
        </div>
    );
};

export default ErrorPage;