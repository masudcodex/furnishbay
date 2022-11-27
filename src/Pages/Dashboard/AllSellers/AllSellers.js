import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loader from '../../../Shared/Loader/Loader';
import { BsCheckCircleFill } from "react-icons/bs";

const AllSellers = () => {
    const {data: sellers=[], isLoading, refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async()=> 
            fetch('http://localhost:5000/sellers',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
    })

    if(isLoading){
        return <Loader></Loader>
    }

    const handleVerify = id => {
        fetch(`http://localhost:5000/sellers/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success("User status successfully changed")
                refetch();
            }
        })
    }

    const handleDeleteUser= id => {
        fetch(`http://localhost:5000/sellers/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount === 1){
                toast.success('seller successfully deleted')
                refetch();
            }
        })
    }

    return (
        <div className='p-10'>
            <h2 className='text-3xl font-bold mb-7'>All Sellers</h2>
            <div className="">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th></th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i)=> 
                        <tr key={seller._id} className='hover'>
                            <th>{i+1}</th>
                            <td className='flex items-center'>{seller.userName} {seller.isVerified === true && <BsCheckCircleFill className='text-md text-blue-600 ml-2'/>}</td>
                            <td>{seller.email}</td>
                            <td>{seller.role}</td>
                            {
                            seller.isVerified === true ? 
                            <td className='text-primary'>Verified</td> : <td className='text-error'>Not verified</td>}
                            <th><button onClick={()=>handleVerify(seller._id)} className= 'btn btn-secondary btn-xs'>verify</button></th>
                            <th><button onClick={()=>handleDeleteUser(seller._id)} className= 'btn btn-error btn-xs text-white'>Delete</button></th>
                        </tr>)
                    }
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllSellers;