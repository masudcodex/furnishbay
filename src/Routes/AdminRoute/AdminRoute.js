import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Components/Hooks/useAdmin/useAdmin';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const {isAdmin, adminLoading} = useAdmin(user?.email);
    const location = useLocation();
    
    if (loading || adminLoading) {
        return <Loader></Loader>
    }
    if (user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default AdminRoute;