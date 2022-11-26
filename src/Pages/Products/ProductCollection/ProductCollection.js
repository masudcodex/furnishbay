import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsCheckCircleFill } from "react-icons/bs";

const ProductCollection = ({product, setProductInfo}) => {
    return (
        <div className="bg-white w-10/12 rounded-md shadow-lg flex flex-col lg:flex-row">
            <div className='w-full lg:w-1/4'>
                <img className='w-full lg:w-[500px] lg:h-[200px]' src={product.image} alt="" />
            </div>
            <div className='w-full lg:w-3/4 p-4 flex flex-col lg:flex-row justify-between'>
                <div>
                    <h2 className='text-2xl font-semibold mb-1'>{product.productName}</h2>
                    <p className='text-sm font-semibold mb-1 flex items-center'>Seller: {product.sellerName}</p>
                    <p className='flex items-center mb-1 justify-start'><IoLocationSharp className='mr-1 text-xl text-secondary'/> {product.location}</p>
                    <div className='flex items-center mb-1'>
                        <p className='mr-3'><b>Resale Price:</b> ${product.resalePrice}</p>
                        <p><b>Original Price:</b> ${product.originalPrice}</p>
                    </div>
                    <p className='mb-1'><b>Years of use: </b>{product.yearsUsed} {product.yearsUsed >= 2 ? 'years' : 'year'}</p>
                    <p className='text-sm'>Post created on {product.posted_time}</p>
                </div>
                <div className='flex mt-5 lg:mt-0 lg:flex-col justify-between'>
                    <button className="btn btn-sm lg:btn-xs btn-primary text-white">Add to wishlist</button>
                    <label 
                    disabled={product.status === 'booked'}
                    htmlFor="booking-modal" 
                    className="btn btn-sm btn-secondary text-white"
                    onClick={()=>setProductInfo(product)}
                    >{product.status === 'booked' ? 'Booked' : 'Book now'}</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCollection;