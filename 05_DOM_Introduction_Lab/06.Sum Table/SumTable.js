function sumTable() {
    // find first table
    const table = document.querySelector('table');
    let rowsWithValues = Array.from(table.querySelectorAll('tr')).slice(1, -1);
    let lastColValues = rowsWithValues.map(e => Number(e.lastElementChild.textContent));
    let sum = lastColValues.reduce((a, b) => a+b, 0);
    document.getElementById('sum').textContent = sum;
}