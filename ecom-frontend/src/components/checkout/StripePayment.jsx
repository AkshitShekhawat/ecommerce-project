import { Alert, AlertTitle } from '@mui/material'
import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PaymentFrom from './PaymentFrom';
import { loadStripe } from '@stripe/stripe-js';
import { createStripePaymentSecret } from '../../store/actions';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
  const dispatch = useDispatch();
  const { clientSecret } = useSelector((state) => state.auth);
  const { totalPrice } = useSelector((state) => state.carts);
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  useEffect(() => {
    if (!clientSecret) {
      dispatch(createStripePaymentSecret(totalPrice));      
    }
  }, [clientSecret]);

  if (isLoading) {
    return (
      <div className='max-w-lg mx-auto'>
        <Skeleton />
      </div>
    )
  }
  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentFrom clientSecret={clientSecret} totalPrice={totalPrice} />
        </Elements>
      )}
    </>
  )
}

export default StripePayment


// <div className='h-96 flex justify-center items-center'>
    //         <Alert severity="warning" variant='filled' style={{ maxWidth: "400px" }}>
    //             <AlertTitle>Stripe Unavailable</AlertTitle>
    //             Stripe payment is unavailable. Please use another payment method.
    //         </Alert>
    //     </div>