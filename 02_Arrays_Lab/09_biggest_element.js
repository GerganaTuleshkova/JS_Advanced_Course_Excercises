function findBiggestElement(matrix) {
    let biggestNumber = -Infinity;
    for (let row of matrix) {
        for (let column of row) {
            if (column >= biggestNumber) {
                biggestNumber = column;
            }
        }
    }
    return biggestNumber
}

console.log(findBiggestElement([[20, 50, 10],
    [8, 33, 145]]
   ))