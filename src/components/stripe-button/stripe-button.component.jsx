import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IBh92L40cu79ifkGGHVoj9VQA0KoGVVpEBVVjscCPL5D1XeZBqSpWW9wj3bmxdvDB1tayFZUXSi5lsiLzbsweug00oevLEeMn'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckButton
