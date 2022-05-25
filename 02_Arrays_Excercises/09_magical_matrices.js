function isMagical(matrix) {
    let result = true;
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    for (let row of matrix) {
        let currentRowSum = row.reduce((a, b) => a + b, 0);
        
        if (currentRowSum !== sum) {
            result = false;
            return result;
        }
    }

    
    for (let c = 0; c < matrix[0].length; c++) {
        let columnSum = 0;
        for (let r = 0; r < matrix.length; r++) {
            columnSum += matrix[r][c];
        }
        
        if (columnSum !== sum) {
            result = false;
            return result;
        }
    }
    return result;
}

console.log(isMagical([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]  
   ))