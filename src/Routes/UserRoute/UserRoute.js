import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../../Components/Hooks/useUser/useUser';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const UserRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const {isUser, userLoading} = useUser(user?.email);
    const location = useLocation();
    
    if (loading || userLoading) {
        return <Loader></Loader>
    }
    if (user && isUser){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default UserRoute;