function equalNeighbors(matrix) {
    let count = 0;
    const row_length = matrix[0].length;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 0; colIndex < row_length - 1; colIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
                count += 1;
            }
        }
    }
    for (let rowIndex = 0; rowIndex < matrix.length -1; rowIndex++) {
        for (let colIndex = 0; colIndex < row_length; colIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
                count += 1;
            }
        }
    }
    return count;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
))