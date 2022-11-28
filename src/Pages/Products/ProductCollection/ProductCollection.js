import React, { useContext, useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsCheckCircleFill } from "react-icons/bs";
import useSeller from '../../../Components/Hooks/useSeller/useSeller';
import { FaRegHeart } from "react-icons/fa";
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../Components/Hooks/useAdmin/useAdmin';

const ProductCollection = ({product, setProductInfo}) => {
    const {user} = useContext(AuthContext);
    const [value, setValue] = useState(false);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    const handleReport = (product) => {
        const reported = {
            productId: product._id,
            image: product.image,
            productName: product.productName,
            sellerName: product.sellerName,
            sellerEmail: product.sellerEmail,
            phone: product.phone,
            //User who submitted the report
            userEmail: user.email,
            isFeatured: product.isFeatured

        }
        fetch('https://furnishbay-server.vercel.app/reportedproduct',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reported)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if (data.acknowledged) {
                toast.success('Item is reported')
                setValue(true);
            }else if(data.message){
                toast.error(data.message)
            }
        
        })
    }
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
                    <div className='flex items-center justify-around'>
                        <span className="tooltip tooltip-secondary" data-tip="Add to wishlist">
                            <FaRegHeart className='text-xl' disabled={isSeller === true}/>
                        </span>
                        <button onClick={()=>handleReport(product)} disabled={value} className='btn btn-xs btn-error rounded-full text-white'>Report</button>
                    </div>
                    <label 
                    disabled={isSeller === true || isAdmin === true}
                    htmlFor="booking-modal" 
                    className="btn btn-sm btn-secondary text-white"
                    onClick={()=>setProductInfo(product)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCollection;