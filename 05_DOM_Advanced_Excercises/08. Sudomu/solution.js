function solve() {
    let buttons = Array.from(document.querySelectorAll('button'));
    let checkButtonElement = buttons[0];
    let clearButtonElement = buttons[1];
    let table = document.querySelector('table');
    let outputElement = document.getElementById("check").querySelector('p');

    checkButtonElement.addEventListener('click', onCheckClick);
    clearButtonElement.addEventListener('click', onClearClick);

    function onCheckClick(event) {
        let matrix = [];
        let rows = Array.from(document.querySelectorAll('tbody tr'));

        for (let rowEl of rows) {
            let td = Array.from(rowEl.querySelectorAll('td'));
            let matrixRow = td.map(td => Number(td.querySelector('input').value));
            matrix.push(matrixRow)
        }
        let outputText = '';

        if (checkResult(matrix)) {
            outputText = 'You solve it! Congratulations!';
            outputElement.style.color = 'green';
            table.style.borderColor = 'green';

        } else {
            outputText = 'NOP! You are not done yet...';
            outputElement.style.color = 'red';
            table.style.borderColor = 'red';
        }

        table.style.borderStyle = 'solid';
        table.style.borderWidth = '2px';
        outputElement.textContent = outputText;
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

    function onClearClick() {
        Array.from(document.querySelectorAll('input'))
            .forEach(i => i.value = '');
        table.style.border = 'none';
        outputElement.textContent = '';
    }
}
