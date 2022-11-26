import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../Components/Hooks/useSeller/useSeller';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const {isSeller, sellerLoading} = useSeller(user?.email);
    const location = useLocation();
    
    if (loading || sellerLoading) {
        return <Loader></Loader>
    }
    if (user && isSeller){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default SellerRoute;