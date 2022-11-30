import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import useTitle from '../../../Hooks/useTItle';

function CheckoutForm({ product, refetch }) {
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe()
  const elements = useElements()
  useTitle('Checkout')

  const { buyerName, email, price, _id, orignalProductId } = product
  console.log(orignalProductId)

  useEffect(() => {
    fetch("https://module-78-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);


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
    setSuccess('');
    setProcessing(true);

    const { paymentIntent, error: confomrError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: email,
          },
        },
      },
    );

    if (confomrError) {
      setCardError(confomrError.message)
      return
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingProductId: _id
      }
      fetch('https://module-78-server.vercel.app/payments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            setSuccess('Congrats! your payment completed');
            setTransactionId(paymentIntent.id);
          }
        })


      const x = {
        orginalProductId: orignalProductId

      }
      fetch('https://module-78-server.vercel.app/payments', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(x)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch()
        })


    }

    setProcessing(false)

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                  border: 'red'
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className='btn btn-sm mt-4 bg-emerald-500 w-full text-center py-2 '
          type="submit"
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
        <p className="text-red-500">{cardError}</p>
      </form>
      {
        success && <div>
          <p className='text-green-500'>{success}</p>
          <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
        </div>
      }
    </>
  )
}


export default CheckoutForm