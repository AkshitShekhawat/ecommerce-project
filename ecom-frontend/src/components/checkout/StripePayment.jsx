import { Alert, AlertTitle } from '@mui/material'
import { Elements } from '@stripe/react-stripe-js';
import React from 'react'
import { useSelector } from 'react-redux';
import PaymentFrom from './PaymentFrom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
   const { clientSecret } = useSelector((state) => state.auth);
   const { totalPrice } = useSelector((state) => state.carts);
   const { isLoading, errorMessage } = useSelector((state) => state.errors);

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