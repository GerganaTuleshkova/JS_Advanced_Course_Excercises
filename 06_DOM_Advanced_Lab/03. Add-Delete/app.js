function addItem() {
    let input = document.getElementById('newItemText');
    let ulElement = document.getElementById('items')
    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';

    deleteLink.addEventListener('click', onDelete);

    newItem.appendChild(deleteLink);
    ulElement.appendChild(newItem);
    function onDelete(event) {
        event.target.parentElement.remove();
        console.log(event);
    }

    input.value = '';
}

