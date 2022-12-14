import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const {user} = useContext(AuthContext);
    const product = useLoaderData();
    return (
        <div className='p-10'>
            <h2 className='text-3xl font-bold mb-7'>Payment for {product.productName}</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm product={product} user={user}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;