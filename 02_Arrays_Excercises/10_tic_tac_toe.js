function ticTacTow(moves) {
    const matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    function isSpotAvailable(r, c, matrix) {
        if (matrix[r][c] != false) {
            return true;
        }
    }  

    function checkIfWon(r, c, player, matrix) {
        let won = false;
        
        // check row
        let rowEntries = matrix[r];
        let playerMarksRow = rowEntries.filter(entry => entry === player);
        if (playerMarksRow.length == 3) {
            won = true;
            return won;
        }
        // check column
        let columnEntries = [matrix[0][c], matrix[1][c], matrix[2][c]];
        let playerMarksColumn = columnEntries.filter(entry => entry === player);
        if (playerMarksColumn.length == 3) {
            won = true;
            return won;
        }

        // check primary diagonal
        let primaryDiagonalEntries = [matrix[0][0], matrix[1][1], matrix[2][2]]
        let playerMarksPrimaryDiagonal = primaryDiagonalEntries.filter(entry => entry === player);
        if (r === c && playerMarksPrimaryDiagonal.length == 3) {
            won = true;
            return won;
        }

        // check secondary diagonal
        let secondaryDiagonal = [matrix[0][2], matrix[1][1], matrix[2][0]];
        let playerMarksSecondaryDiagonal = secondaryDiagonal.filter(entry => entry === player);
        if (r+c == 2 && playerMarksSecondaryDiagonal.length == 3) {
            won = true;
        }

        return won;
    }

    function checkIfEmptySpotsAreLeft(matrix) {
        let spotsAvailable = false;
        for (rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            for (colIndex = 0; colIndex < matrix[0].length; colIndex++) {
                if (matrix[rowIndex][colIndex] === false) {
                    spotsAvailable = true;
                    break;
                }
            }
            if (spotsAvailable) {
                break;
            }
        }
        return spotsAvailable;
    }

    function printMatrix(matrix) {
        for (row of matrix) {
            console.log(row.join('\t'));
        }
    }

    let currentPlayer = 'X';
    let nextPlayer = '0'

    // play
    for (let move of moves) {
        // take next move coordinates
        let [r, c] = move.split(' ')
        
        // check if spot is available, if not go to next itteration without swapping the players
        if (isSpotAvailable(r, c, matrix) == false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        // spot is available, put the mark of the player
        matrix[r][c] = currentPlayer;

        // check if with the current move the player wins; if won, stop the game and print 'won' message
        let playerWonNow = checkIfWon(r, c, currentPlayer, matrix);
        if (playerWonNow == true) {
            console.log(`Player ${currentPlayer} wins!`);
            break;
        }

        //check if there are available spots, if not print message that nobody won and stop the game
        let spotsAvailable = (checkIfEmptySpotsAreLeft(matrix));
        if (spotsAvailable === false) {
            console.log('The game ended! Nobody wins :(');
            break;
        }

        // game not over, swap the players
        [currentPlayer, nextPlayer] = [nextPlayer, currentPlayer];

    }
    printMatrix(matrix)
}

ticTacTow(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);