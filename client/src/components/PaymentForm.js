import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style:{
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight:500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, san-seriff',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':webkit-autofill' : {color:'#fce883'},
            '::placeholder': { color: '#87bbfd'},
            width: '50px'
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        }
    }
}


function PaymentForm(props) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4001/payment", {
          amount: 1000,
          id,
        });
        if (response.data.success) {
          console.log("successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button type="submit">Pay</button>
        </form>
      ) : (
        <div>
          <h2>You just bought a sweet spatula!</h2>
        </div>
      )}
    </>
  );
}

export default PaymentForm;
