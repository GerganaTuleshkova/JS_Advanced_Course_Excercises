function sumOfRange(str1, str2) {
    let start = Number(str1);
    let end = Number(str2);
    let sum = 0

    for (let n = start; n <= end; n++) {
        sum += n;
    }

    console.log(sum);
}

sumOfRange('1', '5' );
sumOfRange('-8', '20' );