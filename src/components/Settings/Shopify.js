import React from 'react';
import Toggle from './Toggle';
import './Shopify.css';

function Shopify() {
    return (
        <div className="shopify">
            <h2 className="shopify__description">Shopify</h2>
            <p className="shopify__controls">Auto Checkout</p>
            <Toggle Name="ShopifyAutoCheckout" />
            <p className="shopify__controls">Complete Payment</p>
            <Toggle Name="ShopifyCompletePayment" />
            <p className="shopify__controls">Force Captcha</p>
            <Toggle Name="ShopifyForceCaptcha" />
        </div>
    );
}

export default Shopify;