import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import MyProducts from '../MyProducts/MyProducts';

const MyOrder = () => {
    const {user} = useContext(AuthContext);
    const {data: bookedProducts=[], isLoading, refetch} = useQuery({
        queryKey: ['email', 'bookedProducts'],
        queryFn: async()=> 
            fetch(`http://localhost:5000/user/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
    })

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <>
            {
                bookedProducts.length === 0 ? 
                <div className='p-10'><h2 className='text-3xl font-bold'>No Booked Products found</h2></div> :
                <div className='p-10'>
                <h2 className='text-3xl font-bold mb-7'>My orders</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Book Product Details</th>
                            <th>Meeting Place</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                bookedProducts.map((product, i)=> 
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
                                        <span className="badge badge-ghost badge-sm mr-2">Price: ${product.price}</span>
                                    </div>
                                    </td>
                                    <td>
                                        {product.meetingLocation}
                                    </td>
                                    <th>
                                        {
                                            product.status === 'paid' ? <button className= 'btn btn-secondary btn-xs text-white' disabled>Paid</button> : <Link to={`/dashboard/payment/${product._id}`}><button className= 'btn btn-secondary btn-xs text-white'>Pay now</button></Link> 
                                        }
                                    </th>
                                </tr>)
                            }
                        
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </>
    );
};

export default MyOrder;