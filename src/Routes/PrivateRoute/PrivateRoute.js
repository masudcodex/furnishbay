import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import loader from '../../Assets/Images/loader.svg';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex align-middle justify-center items-center'>
            <img className='w-96' src={loader} alt="" />
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />;
    }
    return children;
};

export default PrivateRoute;

