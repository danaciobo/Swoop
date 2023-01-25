import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm  from './PaymentForm';
const PUBLIC_KEY ="pk_test_51MTr9bJvTkXt4c3XA8JkoIpje2o1t9wWDkDTJfLZHhl7CjdavTgWMTkayrH2Irh1QXvJCionDXaOYJtG3Ks48fpV00W34D6TL0"

const stripeTest = loadStripe(PUBLIC_KEY)


function StripeContainer(props) {

    return (
        <Elements stripe = {stripeTest}>

            <h1>Spatula</h1>
            
            <PaymentForm />
        </Elements>
    );
}

export default StripeContainer;