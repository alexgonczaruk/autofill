import React, { useState, useEffect } from 'react';
/*global chrome*/
import Toggle from './Toggle';
import './BestBuyCA.css';

function BestBuyCA() {
    const [bConfig, setBConfig] = useState({
        bac: false,
        bcp: false,
        bfc: false
    });
    useEffect(() => {
        chrome.storage.sync.get(['bConfig'], function (result) {
            setBConfig(result.bConfig);
        });
    }, [])
    const bConfigChangeHandler = (event, value) => {
        let oldBConfig = { ...bConfig };
        oldBConfig[value] = event.target.checked;
        setBConfig(oldBConfig);
        chrome.storage.sync.set({ bConfig: oldBConfig });
    }
    return (
        <div className="bbca">
            <h2 className="bbca__description">BestBuyCA</h2>
            <p className="bbca__controls">Auto Checkout</p>
            <Toggle Name="BBCAAutoCheckout" checked={bConfig ? bConfig.bac : false} onChange={e => bConfigChangeHandler(e, "bac")} />
            <p className="bbca__controls">Complete Payment</p>
            <Toggle Name="BBCACompletePayment" checked={bConfig ? bConfig.bcp : false} onChange={e => bConfigChangeHandler(e, "bcp")} />
            <p className="bbca__controls">Force Captcha</p>
            <Toggle Name="BBCAForceCaptcha" checked={bConfig ? bConfig.bfc : false} onChange={e => bConfigChangeHandler(e, "bfc")} />
        </div>
    );
}

export default BestBuyCA;