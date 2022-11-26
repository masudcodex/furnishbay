import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigation, useRevalidator } from 'react-router-dom';
import ProductsBanner from '../ProductsBanner/ProductsBanner';
import Loader from '../../../Shared/Loader/Loader';
import { AuthContext } from '../../../Context/AuthProvider';
import BookProduct from '../BookProduct/BookProduct';
import ProductCollection from '../ProductCollection/ProductCollection';

const Products = () => {
    const {user} = useContext(AuthContext);
    const [productInfo, setProductInfo] = useState(null);
    const products = useLoaderData();
    const navigation = useNavigation();
    const revalidator = useRevalidator();
    
    if(navigation.state === "loading"){
        return <Loader></Loader>
    }

    return (
        <div>
            <ProductsBanner></ProductsBanner>
            <div className='grid grid-cols-1 gap-5 my-20 justify-items-center mx-12'>
                {
                    products?.map(product=> 
                    <ProductCollection 
                        key={product._id} 
                        product={product}
                        setProductInfo={setProductInfo}
                        user={user}
                        >
                    </ProductCollection>)
                }       
            </div>
            {
                productInfo && <BookProduct
                user={user}
                productInfo={productInfo}
                setProductInfo={setProductInfo} 
                revalidator = {revalidator}
                ></BookProduct>
            }
        </div>
    );
};

export default Products;