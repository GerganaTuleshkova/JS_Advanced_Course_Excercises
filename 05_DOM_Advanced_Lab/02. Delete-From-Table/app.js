function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let tableRowsElements = Array.from(document.querySelectorAll('#customers tbody')[0].children);

    let matchFound = false
    for (let row of tableRowsElements) {
        if (row.children[1].textContent == inputElement.value) {
            row.parentElement.removeChild(row);
            matchFound = true;
        }
    }

    inputElement.value = '';

    let resultElement = document.getElementById('result');
    resultElement.textContent = matchFound ? 'Deleted.' : 'Not found.';
    // if (matchFound) {
    //     resultElement.textContent = 'Deleted.';
    // } else {
    //     resultElement.textContent = 'Not found.';
    // }
}