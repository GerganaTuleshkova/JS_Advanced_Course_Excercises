function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let company = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
    let submitButton = document.getElementById('submit');
    let validDiv = document.getElementById('valid')

    submitButton.addEventListener('click', onSubmitClick);
    company.addEventListener('change', onCompanyChanged)

    function styleIncorrect(element) {
        element.style.borderColor = "red";
    }

    function onSubmitClick(event) {
        event.preventDefault();
        let invalidFields = [];
        let allValid = true;

        let regexUsername = /^[a-zA-Z0-9]{3,20}$/g
        if (!regexUsername.test(username.value)) {
            invalidFields.push(username);
            // styleIncorrect(username);
            // allValid = false;
        }

        let regexPassword = /^\w{5,15}$/;
        if (!regexPassword.test(password.value) || confirmPassword.value != password.value) {
            invalidFields.push(password);
            invalidFields.push(confirmPassword);
        }

        // let regexEmail = /(.*)@(.*){1,}\.(.*){1,}/;
        let regexEmail = /(.*)@(.*)+\.(.*)+/
        if (!regexEmail.test(email.value)) {
            invalidFields.push(email);
        }

        if (company.checked) {
            companyInfo.style.display = 'block';
            let regexCompanyNumber = /^[1-9][0-9]{3}$/gm;
            if (!regexCompanyNumber.test(companyNumber.value)) {
                invalidFields.push(companyNumber);
            }
        }

        invalidFields.forEach(el => styleIncorrect(el))

        if (invalidFields.length == 0) {
            validDiv.style.display = 'block'
        }
    }

    function onCompanyChanged(event) {
        if (company.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }
}
