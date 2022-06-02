function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', onChange);

    function onChange(event) {
        inputElement.className = '';
        let regex = /[a-z]+@[a-z]+.[a-z]+/g;
        let isValid = regex.exec(inputElement.value);
        if (!isValid) {
            inputElement.className = 'error';
        } else {
            inputElement.value = '';
        }
    }
}