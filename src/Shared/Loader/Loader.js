import React from 'react';
import loader from '../../Assets/Images/loader.svg';

const Loader = () => {
    return (
        <div className='bg-white min-h-screen flex items-center'>
            <img className='w-96 mx-auto' src={loader} alt=''/>
        </div>
    );
};

export default Loader;