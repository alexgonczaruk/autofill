import React from 'react';
import Toggle from './Toggle';
import './WalmartCA.css';

function WalmartCA() {
    return (
        <div className="wmca">
            <h2 className="wmca__description">WalmartCA</h2>
            <p className="wmca__controls">Auto Checkout</p>
            <Toggle Name="WMCAutoCheckout" />
            <p className="wmca__controls">Complete Payment</p>
            <Toggle Name="WMCACompletePayment" />
            <p className="wmca__controls">Force Captcha</p>
            <Toggle Name="WMCAForceCaptcha" />
        </div>
    );
}

export default WalmartCA;