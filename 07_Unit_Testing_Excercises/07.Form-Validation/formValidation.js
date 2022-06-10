function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassowrd = document.getElementById('confirm-password');
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



        
        let allValid = true;

        let regexUsername = /^[a-zA-Z0-9]{3,20}$/g
        if (!regexUsername.test(username.value)) {
            // console.log()
            styleIncorrect(username);
            allValid = false;
        }

        let regexPassord = /^\w{5,15}$/g;
        if (!regexPassord.test(password.value)) {
            styleIncorrect(password);
            allValid = false;
        }

        if (confirmPassowrd.value != password.value) {
            styleIncorrect(confirmPassowrd);
            styleIncorrect(password);
            allValid = false;
        }

        let regexEmail = /^\w+@\w+\.\w+/gm;
        if (!regexEmail.test(email.value)) {
            styleIncorrect(email);
            allValid = false;
        }

        if (company.checked) {
            companyInfo.style.display = 'block';
            let regexCompanyNumber = /^[1-9][0-9]{3}$/gm;
            if (!regexCompanyNumber.test(companyNumber.value)) {
                console.log(companyNumber)
                styleIncorrect(companyNumber);
                allValid = false;
            }
        }
        
        if (allValid) {
            validDiv.style.display = 'block'
        }


        event.preventDefault()
    }

    function onCompanyChanged(event) {
        if (company.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }
}
