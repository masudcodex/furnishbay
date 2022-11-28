import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useRevalidator } from 'react-router-dom';
import useSeller from '../../../Components/Hooks/useSeller/useSeller';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import BookProduct from '../../Products/BookProduct/BookProduct';

const FeaturedItems = () => {
    const {user} = useContext(AuthContext);
    const [productInfo, setProductInfo] = useState(null);
    const revalidator = useRevalidator();
    const [isSeller] = useSeller(user?.email);

    const {data: products=[], isLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async()=> fetch('http://localhost:5000/products')
                        .then(res=> res.json())
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <>
            {
                products.length >= 1 && 
                <div className='py-5 bg-white'>
                <h2 className='text-3xl font-bold mt-5 ml-6'>Featured Products</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-items-center mx-6'>
                    {
                        products.map(product=> <div key={product._id} className="card w-full bg-base-100 shadow-xl">
                        <figure><img className='w-full h-[300px] md:h-[250px]' src={product.image} alt=" " /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-md">
                            {product.productName}
                            <div className="badge badge-secondary text-white">Featured</div>
                            </h2>
                            <span className='badge badge-outline mr-2'>Original price: ${product.originalPrice}</span>
                            <div className='flex items-center'>
                                <span className='text-sm font-semibold mr-2'>Seller: {product.sellerName}</span>
                                <div className="divider-horizontal"></div>
                                <span className='text-sm font-semibold'>Product used: {product.yearsUsed} year</span>
                            </div>
                            <div className='flex'>
                                <span className='text-sm font-semibold mr-2'>Location: {product.location}</span>
                                <div className="divider-horizontal"></div>
                                <span className='text-sm font-semibold'>Condition: {product.condition}</span>
                            </div>
                            <div className="card-actions justify-between items-center mt-3">
                                <div className="text-primary font-semibold">Resale Price: ${product.resalePrice}</div> 
                                <label 
                                disabled={isSeller === true}
                                htmlFor="booking-modal" 
                                className="btn btn-sm btn-secondary text-white"
                                onClick={()=>setProductInfo(product)}
                                >Book Now</label>
                            </div>
                        </div>
                    </div>)
                    }
                    {
                        productInfo && <BookProduct
                        htmlFor="booking-modal" 
                        user={user}
                        productInfo={productInfo}
                        setProductInfo={setProductInfo} 
                        revalidator = {revalidator}
                        ></BookProduct>
                    }
                </div>
            </div>
            }
        </>
    );
};

export default FeaturedItems;