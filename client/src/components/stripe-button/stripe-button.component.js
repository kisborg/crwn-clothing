import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I5b0wJo8d2PYLsjlMBibkcL8Mfn6F0QyAMIl2eJBFMSWwLj5tKB8bJ4mr0ueB3A2NqAShkt2eoqOM2bRU2XvDFP00F4yfGFeD';
  const onToken = (token) => {
    axios({ 
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(response => {
      alert('Payment successful')
    })
    .catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use the provided credit card information.');
    });
  };
  return (
    <StripeCheckout 
      label="Pay Now"
      name="Clothing Store Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={ priceForStripe }
      token={ onToken }
      stripeKey={ publishableKey }
    />
  )
}
