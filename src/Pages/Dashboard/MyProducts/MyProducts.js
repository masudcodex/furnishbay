import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    console.log('user', user);
    const {data: products=[], isLoading, refetch} = useQuery({
        queryKey: ['email'],
        queryFn: async()=> 
            fetch(`http://localhost:5000/seller/${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
    })

    if(isLoading){
        return <Loader></Loader>
    }

    const handleAddAdvertise = (id)=> {
        console.log(id);
        fetch(`http://localhost:5000/products/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success("Product is added as a featured item")
                refetch();
            }
        })
    }

    const handleDeleteProduct= id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount === 1){
                toast.success('Product deleted successfully')
                refetch();
            }
        })
    }



    return (
        <div className='p-10'>
            <h2 className='text-3xl font-bold mb-7'>My Products</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product Image</th>
                        <th>Product Details</th>
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i)=> 
                            <tr key={product._id} className="hover">
                                <th>{i+1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={product.image} alt=" " />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                {product.productName}
                                <br/>
                                <div>
                                    <span className="badge badge-ghost badge-sm mr-2">Price: {product.resalePrice}</span>
                                    <span className="badge badge-ghost badge-sm">Posted on {product.posted_time}</span>
                                </div>
                                </td>
                                <td>
                                    {product.status === 'available' || product.status === 'booked' ? <span className="badge badge-primary badge-md text-white">Available</span> : <span className="badge badge-error badge-sm text-white">Sold</span> }
                                </td>
                                <th>
                                    <button onClick={()=>handleAddAdvertise(product._id)} className="btn btn-secondary btn-xs text-white" disabled={product.isFeatured === true}>{product.isFeatured === true ? 'Advertised' : 'Advertise'}</button>
                                </th>
                                <th>
                                    <button onClick={()=>handleDeleteProduct(product._id)} className= 'btn btn-error btn-xs text-white'>Delete</button>
                                </th>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyProducts;