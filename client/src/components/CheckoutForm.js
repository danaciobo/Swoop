import {PaymentElement} from '@stripe/react-stripe-js';
import React from 'react';
const CheckoutForm = (props) => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;