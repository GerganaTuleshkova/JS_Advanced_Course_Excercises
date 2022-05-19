function hasSameNumbers(number) {
    let numberAsString = number.toString();
    let firstDigit = numberAsString[0];
    let result = true;
    let sum = Number(numberAsString[0]);
    
    for (let ch of numberAsString.slice(1)) {
        if (ch != firstDigit) {
            result = false;
        }
        sum += Number(ch);
    }
    console.log(result);
    console.log(sum);
}

hasSameNumbers(22222222);
hasSameNumbers(12334);