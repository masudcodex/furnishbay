import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import image from '../../Assets/Images/RouteError.jpg';
import { AuthContext } from '../../Context/AuthProvider';

const RouteError = () => {
    const {logOutUser} = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOutUser()
        .then(()=>{
            navigate('/');
        })
        .catch(error=> console.error(error))
    }
    return (
        <div className='min-h-screen bg-white flex items-center justify-center justify-items-center'>
            <div>
                <p className='text-error text-center font-bold text-2xl'>Something went wrong!</p>
                <img className='mx-auto text-center w-96 h-80' src={image} alt="" />
                <p className='text-error text-center mb-3'>
                    <i className='text-center'>{error.statusText || error.message}</i>
                </p>
                <h4 className='text-md font-semibold text-red text-center'>Please <button className='text-white btn btn-sm btn-error' onClick={handleLogOut}>Logout</button> and Login again</h4>
            </div>
        </div>
    );
};

export default RouteError;