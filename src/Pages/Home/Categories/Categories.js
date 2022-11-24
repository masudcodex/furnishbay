import React from 'react';
import bedroomFurniture from '../../../Assets/Images/bedroomFurniture.jpg'
import diningFurniture from '../../../Assets/Images/Dining furniture.jpg'
import kitchenFurniture from '../../../Assets/Images/kitchen furniture.jpg'

const Categories = () => {
    return (
        <div className='py-5 bg-white'>
            <h2 className='text-3xl font-bold mt-5 ml-6 text-center pb-8'>Popular Categories</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 justify-items-center mx-6'>
                <div className="w-56 pb-10">
                    <figure className=''>
                        <img className='w-56 h-[150px] rounded-md' src={bedroomFurniture} alt="Shoes" />
                        <div className="flex flex-col items-center mt-3">
                            <h2 className="card-title">Bedroom Furniture</h2>
                            <small className='text-center font-semibold'>2 items</small>
                        </div>
                    </figure>
                </div>
                <div className="w-56">
                    <figure className=''>
                        <img className='w-56 h-[150px] rounded-md' src={diningFurniture} alt="Shoes" />
                        <div className="flex flex-col items-center mt-3">
                            <h2 className="card-title">Dining Furniture</h2>
                            <small className='text-center font-semibold'>2 items</small>
                        </div>
                    </figure>
                </div>
                <div className="w-56">
                    <figure className=''>
                        <img className='w-56 h-[150px] rounded-md' src={kitchenFurniture} alt="Shoes" />
                        <div className="flex flex-col items-center mt-3">
                            <h2 className="card-title">Kitchen Furniture</h2>
                            <small className='text-center font-semibold'>2 items</small>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Categories;