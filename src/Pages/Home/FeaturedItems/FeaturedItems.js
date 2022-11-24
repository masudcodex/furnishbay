import React from 'react';

const FeaturedItems = () => {
    return (
        <div className='py-5 bg-white'>
            <h2 className='text-3xl font-bold mt-5 ml-6'>Featured Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-items-center mx-6'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary text-white">Featured</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between items-center mt-3">
                        <div className="text-primary font-semibold">Price: $120.00</div> 
                        <div className="btn btn-xs btn-secondary text-white">Details</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="w-full" src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary text-white">Featured</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between items-center mt-3">
                        <div className="text-primary font-semibold">Price: $120.00</div> 
                        <div className="btn btn-xs btn-secondary text-white">Details</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary text-white">Featured</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between items-center mt-3">
                        <div className="text-primary font-semibold">Price: $120.00</div> 
                        <div className="btn btn-xs btn-secondary text-white">Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;