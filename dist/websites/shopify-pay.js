/*global chrome*/
// import CryptoJS from 'crypto-js'

let sConfig;
let profile;

window.onload = function () {
	chrome.storage.local.get(['profile', 'sConfig'], function(result) {
        console.log('shopify-pay.js running')
		// let profileVal = CryptoJS.AES.decrypt(result.profile, 'shyboy123')
        // profileVal = JSON.parse(profileVal.toString(CryptoJS.enc.Utf8))
        // profile = profileVal
		profile = result.profile
        sConfig = result.sConfig
		if (sConfig.sac) {
			if (profile) {
				let fields = {
					'number': profile.cardNumber,
					'name': `${profile.firstName} ${profile.lastName}`,
					'expiry': profile.expiration,
					'verification_value': profile.securityCode,
				}

				Object.keys(fields).forEach(id => {
					fillField(id, fields[id]);
				});

				chrome.runtime.sendMessage({action: 'completeCheckout'});
			}
		}
	});
}

function fillField(id, value) {
	let element = document.getElementById(id);
	if (element) {
		element.focus();
        element.value = value;
        element.dispatchEvent(new Event('change'));
		element.blur();
	}
}