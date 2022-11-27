import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

function CheckoutForm({ price }) {
  console.log(price)

  const [cardError, setCardError] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: 5000 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);

    } else {
      setCardError('')
    }





    const { paymentIntent, error: confomrError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: 'Jenny Rosen',
          },
        },
      },
    );

    if (confomrError) {
      setCardError(confomrError.message)
      return
    }
    else {
      console.log('paymentIntent', paymentIntent)
    }

  };

  return (
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
      <p>{cardError}</p>
      <button className='btn bg-white' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}


export default CheckoutForm