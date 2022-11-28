import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const CheckoutForm = ({product, user}) => {
    const {price} = product;
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem('accessToken')}` 
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret)
        });
    }, [price]);



    const handleSubmit = async(event)=> {
        event.preventDefault();

        if (!stripe || !elements) {
          return;
        }    
    
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setCardError(error.message)
    }else{
      setCardError('');
      console.log('[PaymentMethod]', paymentMethod);
    }

    setLoading(true);
    const {paymentIntent, error: paymentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email
          },
        },
      },
    );

    if (paymentError) {
      setCardError(paymentError.message);
      return;
    }
    if(paymentIntent.status === 'succeeded'){
        //Save payment info to the database
        const payment = {
            transactionId: paymentIntent.id,
            email: user.email,
            productName: product.productName,
            productId: product.productId,
            price: price,

            
        }
        fetch('http://localhost:5000/payment', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}` 
          },
          body: JSON.stringify(payment)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data);
          if (data.insertedId) {
            toast.success('Congratulation! Your payment is received successfully');
            setCardSuccess('Payment Successful');
            setTransactionId(paymentIntent.id);
          }
        })
      }
      setLoading(false);

    
  }
    return (
      <div className='w-6/12 bg-white p-5 rounded-lg'>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className='btn btn-secondary w-full mt-4 btn-sm text-white' type="submit" disabled={!stripe || !clientSecret || loading}>
            Pay
          </button>
          <p className="text-red-500">{cardError}</p>
        </form>
        {
          cardSuccess && 
          <span>
            <p className='text-primary'>Your transaction is complete</p>
            <p>Your transaction id: {transactionId}</p>
          </span>
        }
      </div>
        
    );
};

export default CheckoutForm;