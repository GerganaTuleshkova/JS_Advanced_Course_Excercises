function generateReport() {
    let headerElements = document.querySelectorAll('thead th');

    // check which columns are checked and add their indicess to an array
    let checkedColumnsIndices = []
    for (let i = 0; i < headerElements.length; i++) {
        let headObj = headerElements[i];
        let inputChild = headObj.lastChild;
        if (inputChild.checked) {
            checkedColumnsIndices.push(i);
        }
    }

    // get all rows except heading
    // rows are the trs of the tbody
    let rows = document.querySelectorAll('tbody tr');

    // create array that will keep all created objects
    let objList = [];


    for (let row of rows) {
        // declare obj
        let obj;

        // object is created only if some columns are checked
        if (checkedColumnsIndices.length !== 0) {
            obj = {};
        }

        // take the td elements of a row
        let rowCells = row.children;

        // itterate trough the checked columns indices and take respective row values
        // add to the object header.lastchild.name :row value
        for (let cellIndex of checkedColumnsIndices) {
            let headerName = headerElements[cellIndex].lastChild.name;
            let rowValue = rowCells[cellIndex].textContent;

            obj[headerName] = rowValue;
        }
        objList.push(obj);
    }

    let result = JSON.stringify(objList);

    if (checkedColumnsIndices.length > 0) {
        document.getElementById('output').textContent = result;
    }
}
