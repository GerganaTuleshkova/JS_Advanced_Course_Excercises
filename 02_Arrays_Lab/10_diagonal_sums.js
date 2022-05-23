function diagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        mainDiagonalSum += matrix[rowIndex][rowIndex];
        secondaryDiagonalSum += matrix[rowIndex][matrix.length - 1 - rowIndex];
    }
    console.log(mainDiagonalSum, secondaryDiagonalSum);
}

diagonalSums([[20, 40],[10, 60]])
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )
