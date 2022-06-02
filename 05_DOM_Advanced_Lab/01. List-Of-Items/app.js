function addItem() {
    let input = document.getElementById('newItemText');
    let ulElement = document.getElementById('items')
    let newItem = document.createElement('li');
    ulElement.appendChild(newItem);
    newItem.textContent = input.value;
    
    input.value = '';
}