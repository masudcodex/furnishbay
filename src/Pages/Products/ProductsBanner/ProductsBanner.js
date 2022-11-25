import React from 'react';
import image from '../../../Assets/Images/productpagebg.jpg';

const ProductsBanner = () => {
    return (
        <div className='py-28 bg-bottom' style={{backgroundImage: `url(${image})`}}>
            <h2 className="text-6xl text-center text-white font-bold">Products</h2>
        </div>
    );
};

export default ProductsBanner;