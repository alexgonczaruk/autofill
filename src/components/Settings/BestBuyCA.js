import React from 'react';
import Toggle from './Toggle';
import './BestBuyCA.css';

function BestBuyCA() {
    return (
        <div className="bbca">
            <h2 className="bbca__description">BestBuyCA</h2>
            <p className="bbca__controls">Auto Checkout</p>
            <Toggle Name="BBCAAutoCheckout" />
            <p className="bbca__controls">Complete Payment</p>
            <Toggle Name="BBCACompletePayment" />
            <p className="bbca__controls">Force Captcha</p>
            <Toggle Name="BBCAForceCaptcha" />
        </div>
    );
}

export default BestBuyCA;