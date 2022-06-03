function solve() {
    let buttons = document.querySelectorAll('button');
    let checkButtonElement = buttons[0];
    let matrix = []

    checkButtonElement.addEventListener('click', onCheckClick);

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    for (let rowEl of rows) {
        let td = Array.from(rowEl.querySelectorAll('td'))
        let matrixRow = td.map(td => Number(td.querySelector('input').value))
        matrix.push(matrixRow)
    }

    function onCheckClick(event) {
        let outputText = '';
        let outputElement = document.getElementById("check").querySelector('p')
        let table = document.querySelector('table')
        console.log(table)
        console.log(outputElement)
        if (checkResult(matrix)) {
            outputText = 'You solve it! Congratulations!';
            outputElement.style.color = 'green';
            table.style.borderColor = 'green';
            table.style.borderStyle = 'solid';
            table.style.borderWidth  = '2px';
            
        } else {
            outputText = 'NOP! You are not done yet...';
            outputElement.style.color = 'red'
        }

        outputElement.textContent = outputText;
        console.log(checkResult(matrix))
    }

    function checkResult(matrix) {
        let numbers = [1, 2, 3]
        let isSolved = true
        for (let row = 0; row < 3; row++) {
            if (matrix[row][0] != matrix[row][1]
                && matrix[row][0] != matrix[row][2]
                && matrix[row][1] != matrix[row][2]
                && numbers.includes(matrix[row][0])
                && numbers.includes(matrix[row][1])
                && numbers.includes(matrix[row][2])
            ) {

            } else {
                isSolved = false;
                break;
            }
        }

        for (let i = 0; i < 3; i++) {

            if (matrix[0][i] != matrix[1][i]
                && matrix[0][i] != matrix[2][i]
                && matrix[1][i] != matrix[2][i]) {

            } else {
                isSolved = false;
                break;
            }
        }

        return isSolved;
    }
}
    