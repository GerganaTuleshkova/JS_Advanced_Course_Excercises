function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');

    let newOption = document.createElement('option');

    newOption.textContent = textElement.value;
    newOption.value = valueElement.value;
    document.getElementById('menu').appendChild(newOption);

    textElement.value = '';
    valueElement.value = '';
}