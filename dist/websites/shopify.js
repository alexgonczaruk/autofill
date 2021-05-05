/*global chrome*/
// let profile
// let sConfig

// chrome.storage.local.get(['profile'], function(result) {
//     profile = result.profile;
// });

// chrome.storage.local.get(['sConfig'], function(result) {
//     sConfig = result.sConfig;
//     identifyStep(document.URL);
// });

// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === 'finalizeCheckout' && sConfig.sac) {
//     finalizeCheckout();
//   }
// });

// const identifyStep = url => {
//   if (url.includes('&step=shipping_method') && sConfig.sac) {
//     clickNextStep();
//   } else {
//     fillShipping(profile);
//   }
// };

// const fillShipping = profile => {
//   const fieldDetails = {
//     checkout_email: profile.email,
//     checkout_shipping_address_first_name: profile.firstName,
//     checkout_shipping_address_last_name: profile.lastName,
//     checkout_shipping_address_address1: profile.address1,
//     checkout_shipping_address_address2: profile.address2,
//     checkout_shipping_address_city: profile.city,
//     checkout_shipping_address_zip: profile.postalCode,
//     checkout_shipping_address_phone: profile.phone
//   };

//   const fields = Object.keys(fieldDetails);

//   fields.forEach(field => {
//     let pageElement = document.getElementById(field);
//     let detail = fieldDetails[field];
//     pageElement.focus();

//     fillField(pageElement, detail);

//     pageElement.dispatchEvent(new Event('change'));
//     pageElement.blur();
//   });

//   document.getElementById('checkout_shipping_address_country').value =
//     profile.country;
//   document.getElementById('checkout_shipping_address_province').value =
//     profile.province;

//   if (sConfig.sac) {
//     clickNextStep();
//   }
// };

// // Checks the page for a Google Recaptcha, if present will not automatically click buttons
// const checkForRecaptcha = () => {
//   return document.querySelector('.g-recaptcha')
// };

// const fillField = (field, detail) => {
//   field.value = detail;
// };

// const finalizeCheckout = () => {
//   let attemptedCheckout = setTimeout(() => {
//     clickNextStep();
//     clearTimeout(attemptedCheckout);
//   }, 1000);
// };

// const clickNextStep = () => {
//   let continueButton = document.querySelector('.step__footer__continue-btn');
//   if ((!checkForRecaptcha())) {
//     continueButton.click();
//   }
// };

let sConfig;
let profile;
// chrome.storage.local.get(['profile'], function(result) {
//     console.log(result, result.profile)
// })
window.onload = function () {
	chrome.storage.local.get(['profile', 'sConfig'], function(result) {
        profile = result.profile
        sConfig = result.sConfig
        console.log('shopify.js running', result)
    
		if (sConfig.sac) {
			if (profile) {
				if (currentStep() === 'contact_information') {
					let fields = {
						'[name="checkout[email_or_phone]"]': profile.email,
						'[name="checkout[email]"]': profile.email,
						'#checkout_email': profile.email,
						'#checkout_email_or_phone': profile.email,
						'#checkout_shipping_address_first_name': profile.firstName,
						'#checkout_shipping_address_last_name': profile.lastName,
						'#checkout_shipping_address_address1': profile.address1,
						'#checkout_shipping_address_address2': profile.address2,
						'#checkout_shipping_address_city': profile.city,
						'#checkout_shipping_address_zip': profile.postalCode,
						'#checkout_shipping_address_phone': profile.phone,
						'#checkout_billing_address_first_name': profile.firstName,
						'#checkout_billing_address_last_name': profile.lastName,
						'#checkout_billing_address_address1': profile.address1,
						'#checkout_billing_address_address2': profile.address2,
						'#checkout_billing_address_city': profile.city,
						'#checkout_billing_address_zip': profile.postalCode,
						'#checkout_billing_address_phone': profile.phone
					}

					Object.keys(fields).forEach(id => {
						fillField(id, fields[id]);
					});

					fillField('#checkout_shipping_address_country', profile.country, true);
					fillField('#checkout_shipping_address_province', profile.province, true);

					fillField('#checkout_billing_address_country', profile.country, true);
					fillField('#checkout_billing_address_province', profile.province, true);

					
                    console.log(hasCaptcha(), sConfig.sfc)
					if (sConfig.sac) {
						if (!hasCaptcha()) {
							continueToNextStep();
						} else if (hasCaptcha && sConfig.sfc) {
                            let captchaButton = document.querySelector('.g-recaptcha')
                            captchaButton.click()
                            // document.querySelector('#recaptcha-anchor').click()
                        }
					}
				} else if (currentStep() === 'shipping_method') {
					if (sConfig.sac) {
                        while(document.querySelector('.step__footer__continue-btn').disabled) {
                            if (!document.querySelector('.step__footer__continue-btn').disabled) {
                                break
                            }
                        }
                        
						continueToNextStep();
					}
				}
			}
		}
	});
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {	
    let newConfig;
    chrome.storage.local.get(['profile', 'sConfig'], function(result) {
        profile = result.profile
        newConfig = result.sConfig
        if (request.action === 'completeCheckout' && newConfig.scp) {
            continueToNextStep();
        }
    })
});

const currentStep = () => {
	let element = document.querySelector('[data-step]');
	return element.dataset.step;
}

function fillField(id, value, select = false) {
	let element = document.querySelector(id);
	if (element) {
		element.focus();
        element.value = value;
        element.dispatchEvent(new Event('change'));
		element.blur();
	}
}

function hasCaptcha() {
	return document.getElementById('g-recaptcha');
}

function continueToNextStep() {
	let continueButton = document.querySelector('.step__footer__continue-btn');
	continueButton.click();
};