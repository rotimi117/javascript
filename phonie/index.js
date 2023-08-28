    document.addEventListener('DOMContentLoaded', function() {
        const phoneNumberInput = document.getElementById('phonenumber');
        const networkCarrier = document.getElementById('network-carrier');
    
        phoneNumberInput.addEventListener('input', function() {
            const phoneNumber = phoneNumberInput.value;
    
            if (phoneNumber.length >= 4) {
                const firstFourDigits = phoneNumber.substr(0, 4);
    
                const carrier = getNetworkCarrier(firstFourDigits);
                updateNetworkCarrier(carrier);
            } else {
                updateNetworkCarrier('');
            }
        });    
        function getNetworkCarrier(prefix) {
            if (/^(0803|0806|0703|0706|0814|0816|0813|0810)/.test(prefix)) {
                return 'MTN';
            } else if (/^(0705|0805|0807|0815)/.test(prefix)) {
                return 'Glo';
            } else if (/^(0701|0802|0812|0808|0708|0907)/.test(prefix)) {
                return 'Airtel';
            } else if (/^(0809|0909|0818|0817|0709)/.test(prefix)) {
                return 'Etisalat';
            } else {
                return 'Unknown';
            }
        }
    
        function updateNetworkCarrier(carrier) {
            networkCarrier.textContent = `Network: ${carrier}`;
        }
            });
            

    
















function validatePhoneNumberNetwork(phoneNumber) {
  



    if (mtnPattern.test(phoneNumber)) {
        phoneValidationMessage.textContent = 'MTN number detected.';
    } else if (gloPattern.test(phoneNumber)) {
        phoneValidationMessage.textContent = 'Glo number detected.';
    } else if (airtelPattern.test(phoneNumber)) {
        phoneValidationMessage.textContent = 'Airtel number detected.';
    } else if (etisalatPattern.test(phoneNumber)) {
        phoneValidationMessage.textContent = 'Etisalat number detected.';
    } else {
        phoneValidationMessage.textContent = 'Network not recognized.';
    }
}