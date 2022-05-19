function hasSameNumbers(number) {
    let numberAsString = number.toString();
    let digit = numberAsString[0];
    let result = true;
    let sum = Number(numberAsString[0]);
    for (ch of numberAsString.slice(1)) {
        if (ch != digit) {
            result = false;
        }
        sum += Number(ch);
    }
    console.log(result);
    console.log(sum);
}

hasSameNumbers(22222222);
hasSameNumbers(12334);