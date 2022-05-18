function aggregate(array) {
    let sumOfElements = 0;
    let sumOfInverse = 0;
    let concatElements = '';
    for (let el of array) {
        sumOfElements += el;
        sumOfInverse += 1/el;
        concatElements += el.toString();
    }

    console.log(sumOfElements);
    console.log(sumOfInverse);
    console.log(concatElements);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);
