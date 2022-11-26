import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loader from '../../../Shared/Loader/Loader';

const Categories = () => {
    const {data: categories = [], isLoading, refetch} = useQuery({
        queryKey: 'categories',
        queryFn: async()=> fetch('http://localhost:5000/categories')
        .then(res=> res.json())
    })
    if (isLoading) {
        <Loader></Loader>
    }
    return (
        <div className='py-5 bg-white'>
            <h2 className='text-3xl font-bold mt-5 ml-6 text-center pb-8'>Popular Categories</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 justify-items-center mx-6'>
                {
                    categories.map(category=> 
                    <div key={category._id} className="w-56 pb-10">
                        <figure>
                            <Link to={`/categories/${category.category_id}`}><img className='w-56 h-[150px] rounded-md' src={category.picture} alt="Shoes" /></Link>
                            <div className="flex flex-col items-center mt-3">
                                <h2 className="card-title">{category.name}</h2>
                            </div>
                        </figure>
                    </div>)
                }  
            </div>
        </div>
    );
};

export default Categories;