function cookingByNumbers(numberAsStr, ...params) {
    let result = Number(numberAsStr);

    let operations = params;

    for (op of operations) {
        if (op == 'chop') {
            result /= 2;
        } else if (op == 'dice') {
            result = Math.sqrt(result);
        } else if (op == 'spice') {
            result += 1;
        } else if (op == 'bake') {
            result *= 3;
        } else if (op == 'fillet') {
            result *= 0.8;
        }
        console.log(result);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');