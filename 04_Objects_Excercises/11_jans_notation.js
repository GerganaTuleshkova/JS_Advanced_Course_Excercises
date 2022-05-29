function calc(input) {
    let numbers = [];
    let errorReceived = false;

    const operands = {
        ['+'](a, b) { return a + b },
        ['-'](a, b) { return a - b },
        ['*'](a, b) { return a * b },
        ['/'](a, b) { return a / b },
    }

    for (let element of input) {
        if (typeof element == 'number') {
            numbers.push(element);
        } else if (typeof element == 'string') {
            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
                errorReceived = true;
                break;
            } else {
                let b = numbers.pop();
                let a = numbers.pop();
                let newNumber = operands[element](a, b);
                numbers.push(newNumber);
            }
        }
    }

    if (!errorReceived) {
        if (numbers.length > 1) {
            console.log('Error: too many operands!');
        } else {
            console.log(numbers[0]);
        }
    }

}


calc([7,
    33,
    8,
    '-']


)