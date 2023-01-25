import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm  from './PaymentForm';
import CheckoutForm from '../CheckoutForm';

const PUBLIC_KEY ="pk_test_51MTr9bJvTkXt4c3XA8JkoIpje2o1t9wWDkDTJfLZHhl7CjdavTgWMTkayrH2Irh1QXvJCionDXaOYJtG3Ks48fpV00W34D6TL0"

const stripePromise = loadStripe(PUBLIC_KEY)
// const stripe = loadStripe()

function StripeContainer() {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}'
      };  
    return (
        <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
      <div>I'm a payment page</div>
        </Elements>
      
    );
}

export default StripeContainer;