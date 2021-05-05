import React, { useState, useEffect } from 'react';
/*global chrome*/
import Toggle from './Toggle';
import './WalmartCA.css';

function WalmartCA() {
    const [wConfig, setWConfig] = useState({
        wac: false,
        wcp: false,
        wfc: false
    });
    useEffect(() => {
        chrome.storage.local.get(['wConfig'], function (result) {
            setWConfig(result.wConfig);
        });
    }, [])
    const wConfigChangeHandler = (event, value) => {
        let oldWConfig = { ...wConfig };
        oldWConfig[value] = event.target.checked;
        setWConfig(oldWConfig);
        chrome.storage.local.set({ wConfig: oldWConfig });
    }
    return (
        <div className="wmca">
            <h2 className="wmca__description">WalmartCA</h2>
            <p className="wmca__controls">Auto Checkout</p>
            <Toggle Name="WMCAutoCheckout" checked={wConfig ? wConfig.wac : false} onChange={e => wConfigChangeHandler(e, "wac")} />
            <p className="wmca__controls">Complete Payment</p>
            <Toggle Name="WMCACompletePayment" checked={wConfig ? wConfig.wcp : false} onChange={e => wConfigChangeHandler(e, "wcp")} />
            <p className="wmca__controls">Force Captcha</p>
            <Toggle Name="WMCAForceCaptcha" checked={wConfig ? wConfig.wfc : false} onChange={e => wConfigChangeHandler(e, "wfc")} />
        </div>
    );
}

export default WalmartCA;