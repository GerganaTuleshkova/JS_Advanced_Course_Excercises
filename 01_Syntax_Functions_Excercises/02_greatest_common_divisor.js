function greatestCommonDivisor(number1, number2) {
    let gcd = 1;
    for (divisor = Math.min(number1, number2); divisor > 1; divisor--) {
        if (number1 % divisor == 0 && number2 % divisor == 0) {
            gcd = divisor;
            break;
        }
    }
    console.log(gcd);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
