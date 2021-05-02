import React, { useState, useEffect } from 'react';
/*global chrome*/
import Toggle from './Toggle';
import './Shopify.css';

function Shopify() {
    const [config, setConfig] = useState({
        ac: false,
        cp: false,
        fc: false
    });
    useEffect(() => {
        chrome.storage.sync.get(['config'], function (result) {
            setConfig(result.config);
        });
    }, [])
    const configChangeHandler = (event, value) => {
        let oldConfig = { ...config };
        oldConfig[value] = event.target.checked;
        setConfig(oldConfig);
        chrome.storage.sync.set({ oldConfig });
    }
    return (
        <div className="shopify">
            <h2 className="shopify__description">Shopify</h2>
            <p className="shopify__controls">Auto Checkout</p>
            <Toggle Name="ShopifyAutoCheckout" checked={config ? config.ac : false} onChange={e => configChangeHandler(e, "ac")} />
            <p className="shopify__controls">Complete Payment</p>
            <Toggle Name="ShopifyCompletePayment" checked={config ? config.cp : false} onChange={e => configChangeHandler(e, "cp")} />
            <p className="shopify__controls">Force Captcha</p>
            <Toggle Name="ShopifyForceCaptcha" checked={config ? config.fc : false} onChange={e => configChangeHandler(e, "fc")} />
        </div>
    );
}

export default Shopify;