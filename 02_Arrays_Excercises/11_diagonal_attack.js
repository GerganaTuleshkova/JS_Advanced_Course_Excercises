function diagonalAttack(input) {
    // create the matrix of numbers
    let matrix = [];
    for (let string of input) {
        let row = string.split(' ');
        row = row.map(Number);
        matrix.push(row);
    }
    rowsCount = matrix.length;
   
    function printMatrix(matrix) {
        for (row of matrix) {
            console.log(row.join(' '));
        }
    }

    function diagonalsSumAreEqual(matrix) {
        
        let primaryDiagonalSum = 0
        let secondaryDiagonalSum = 0
        for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
            for (let colIndex = 0; colIndex < rowsCount; colIndex++) {
                if (rowIndex == colIndex) {
                    primaryDiagonalSum += matrix[rowIndex][colIndex];
                }
                if (rowIndex == rowsCount - 1 - colIndex) {
                    secondaryDiagonalSum += matrix[rowIndex][colIndex];
                }
            }
        }
        
        if (primaryDiagonalSum === secondaryDiagonalSum) {
            return primaryDiagonalSum;
        } else {
            return false;
        }
    }

    function changeNonDiagonalsToSum(matrix, sum) {
        for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
            for (let colIndex = 0; colIndex < rowsCount; colIndex++) {
                if (rowIndex !== colIndex && rowIndex !== rowsCount - 1 - colIndex ) {
                    matrix[rowIndex][colIndex] = sum;
                }
                
            }
        }
        return matrix;
    }

    // check if diagonals sums are equal
    let sum = diagonalsSumAreEqual(matrix);

    // if equal sums change the non diagonal cells
    if (sum) {
        matrix = changeNonDiagonalsToSum(matrix, sum);
    }

    // print the matrix
    printMatrix(matrix)   
}

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']

)