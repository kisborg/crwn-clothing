import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I5b0wJo8d2PYLsjlMBibkcL8Mfn6F0QyAMIl2eJBFMSWwLj5tKB8bJ4mr0ueB3A2NqAShkt2eoqOM2bRU2XvDFP00F4yfGFeD';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
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
