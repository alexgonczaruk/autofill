import React, { useState, useEffect } from 'react';
/*global chrome*/
import Toggle from './Toggle';
import './Shopify.css';

function Shopify() {
    const [sConfig, setSConfig] = useState({
        sac: false,
        scp: false,
        sfc: false
    });
    useEffect(() => {
        chrome.storage.sync.get(['sConfig'], function (result) {
            setSConfig(result.sConfig);
        });
    }, [])
    const sConfigChangeHandler = (event, value) => {
        let oldSConfig = { ...sConfig };
        oldSConfig[value] = event.target.checked;
        setSConfig(oldSConfig);
        chrome.storage.sync.set({ sConfig: oldSConfig });
    }
    return (
        <div className="shopify">
            <h2 className="shopify__description">Shopify</h2>
            <p className="shopify__controls">Auto Checkout</p>
            <Toggle Name="ShopifyAutoCheckout" checked={sConfig ? sConfig.sac : false} onChange={e => sConfigChangeHandler(e, "sac")} />
            <p className="shopify__controls">Complete Payment</p>
            <Toggle Name="ShopifyCompletePayment" checked={sConfig ? sConfig.scp : false} onChange={e => sConfigChangeHandler(e, "scp")} />
            <p className="shopify__controls">Force Captcha</p>
            <Toggle Name="ShopifyForceCaptcha" checked={sConfig ? sConfig.sfc : false} onChange={e => sConfigChangeHandler(e, "sfc")} />
        </div>
    );
}

export default Shopify;