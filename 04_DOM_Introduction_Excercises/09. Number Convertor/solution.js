function solve() {

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        let input = document.getElementById('input');
        let numberToConvert = Number(input.value);

        // get what type to convert to
        let convertToType = document.querySelector('#selectMenuTo');
        let result = '';

        function decimalToBinary(number) {
            return (number >>> 0).toString(2);
        }

        function decimalToHexString(number) {
            return ("0" + (Number(number).toString(16))).slice(-2).toUpperCase();
        }

        console.log(convertToType.value)
        console.log(convertToType)
        console.log(convertToType.selectedOptions[0].value)
        // if (convertToType.selectedIndex == 0) {
        //     result = decimalToBinary(numberToConvert);
        // } else if (convertToType.selectedIndex == 1) {
        //     result = decimalToHexString(numberToConvert);
        // }

        if (convertToType.selectedOptions[0].value == 'binary') {
            result = decimalToBinary(numberToConvert);
        } else if (convertToType.selectedOptions[0].value == 'hexadecimal') {
            result = decimalToHexString(numberToConvert);
        }


        document.getElementById('result').value = result;
    }
}