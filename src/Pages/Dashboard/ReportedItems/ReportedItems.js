import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loader from '../../../Shared/Loader/Loader';

const ReportedItems = () => {
    const {data: reportedProducts=[], isLoading, refetch} = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: async()=> 
            fetch('http://localhost:5000/reportedproducts')
            .then(res=>res.json())
    })

    if(isLoading){
        return <Loader></Loader>
    }

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/reportedproducts/${id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if (data.acknowledged) {
                toast.success('Product is deleted successfully');
                refetch();
            }
        })
    }

    return (
        <div className='p-10'>
            <h2 className='text-3xl font-bold mb-7'>Reported Items</h2>
            <div className="">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product Image</th>
                        <th>Product Details</th>
                        <th>Reported by</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            reportedProducts.map((product, i)=> 
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
                                <div className='flex flex-col'>
                                    <span className="badge badge-outline badge-sm my-2">Seller name: {product.sellerName}</span>
                                    <span className="badge badge-outline badge-sm">Email:  {product.sellerEmail}</span>
                                </div>
                                </td>
                                <td>
                                    <span className="badge badge-md text-white">{product.userEmail}</span>
                                </td>
                                <th>
                                    <button onClick={()=>handleDelete(product.productId)} className= 'btn btn-error btn-xs text-white'>Delete product</button>
                                </th>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;