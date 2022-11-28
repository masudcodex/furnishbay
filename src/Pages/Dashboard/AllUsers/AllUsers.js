import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../../Shared/Loader/Loader';

const AllUsers = () => {
    const {data: users=[], isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> 
            fetch('https://furnishbay-server.vercel.app/users',{
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
        <div className='p-10'>
            <h2 className='text-3xl font-bold mb-7'>All Users</h2>
            <div className="">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i)=> 
                        <tr key={user._id} className='hover'>
                            <th>{i+1}</th>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>)
                    }
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllUsers;