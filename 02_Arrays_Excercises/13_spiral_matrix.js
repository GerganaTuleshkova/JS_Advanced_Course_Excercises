function spiralMatrix(width, height) {

    // helping function for printing the matrix
    function printMatrix(matrix) {
        for (row of matrix) {
            console.log(row.join(' '));
        }
    }

    //create the matrix with 0s
    let matrix = [];
    for (let r = 0; r < height; r++) {
        matrix.push([]);
        for (let c = 0; c < width; c++) {
            matrix[r].push(0);
        }
    }


    // start the spiral
    let currentNumber = 1;
    let r = 0;
    let c = 0;
    let i = 1;

    while (true) {
        while (c < width) {

            matrix[r][c] = currentNumber;
            currentNumber++;
            if (c == width - 1 || matrix[r][c + 1] !== 0) {
                break;
            }

            c += i;
        }
        r++;
        if (matrix[r][c] !== 0) {
            break;
        }
        while (r < height) {
            matrix[r][c] = currentNumber;
            currentNumber++;
            if (r == height - 1 || matrix[r + 1][c] !== 0) {
                break;
            }
            r += i;
        }
        c--;
        if (matrix[r][c] !== 0) {
            break;
        }
        while (c >= 0) {
            matrix[r][c] = currentNumber;
            currentNumber++;
            if (c == 0 || matrix[r][c - 1] !== 0) {
                break;
            }
            c -= i;
        }
        r--;
        if (matrix[r][c] !== 0) {
            break;
        }
        while (r >= c) {
            matrix[r][c] = currentNumber;
            currentNumber++;
            if (r == c || matrix[r - 1][c] !== 0) {
                break;
            }
            r -= i;
        }
        c++;
        if (matrix[r][c] !== 0) {
            break;
        }


    }

    printMatrix(matrix)
}

spiralMatrix(5, 5);