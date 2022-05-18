function solve(number1, number2, operator) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2
    } else if (operator == '*') {
        result = number1 * number2
    } else if (operator == '/') {
        result = number1 / number2
    } else if (operator == '%') {
        result = number1 % number2
    } else if (operator == '**') {
        result = number1 ** number2
    }
    console.log(result)
}

solve(5, 6, '+');
solve(3, 5.5, '*');