function drawOrbit(inputArray) {
    // get input
    let [width, height, starRow, starColumn] = inputArray;

    // helping function for printing the matrix
    function printMatrix(matrix) {
        for (row of matrix) {
            console.log(row.join(' '));
        }
    }

    //create the matrix
    let matrix = [];
    for (let r = 0; r < height; r++) {
        matrix.push([]);
        for (let c = 0; c < width; c++) {
            matrix[r].push(0);
        }
    }

    // put the star on the matrix
    let starMark = 1;
    matrix[starRow][starColumn] = starMark;

    // fill the orbits
    for (let oR = 0; oR < height; oR++) {
        for (let oC = 0; oC < width; oC++) {
            let difference = Math.max(Math.abs(oC - starColumn), Math.abs(oR - starRow))
            matrix[oR][oC] = starMark + difference;
        }
    }

    printMatrix(matrix)
}

drawOrbit([5, 6, 2, 2]);