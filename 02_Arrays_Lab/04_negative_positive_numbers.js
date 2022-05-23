function negativePositive(array) {
    let orderredArray = [];
    for (let n of array) {
        if (n >= 0) {
            orderredArray.push(n);
        } else {
            orderredArray.unshift(n);
        }
    }
    console.log(orderredArray.join('\n'));
}

negativePositive([7, -2, 8, 9])