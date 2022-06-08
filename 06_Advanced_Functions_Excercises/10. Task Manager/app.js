function solve() {
    let inputElement = document.querySelector('form');
    let sections = document.querySelectorAll('section');
    let openElement = sections[1];
    let inProgressElement = sections[2];
    let completeElement = sections[3];

    document.getElementById('add').addEventListener('click', onAddClick);
    document.querySelector('main').addEventListener('click', onDeleteClick, true);
    document.querySelector('main').addEventListener('click', onStartClick, true);
    document.querySelector('main').addEventListener('click', onFinishClick, true);

    function onAddClick(event) {
        let taskName = inputElement.querySelector('#task').value;
        let description = inputElement.querySelector('#description').value;
        let date = inputElement.querySelector('#date').value;

        if (taskName && description && date) {
            createTaskElement(taskName, description, date);
        }
        event.preventDefault();
    }

    function createTaskElement(name, description, dueDate) {
        let articleTask = document.createElement('article');

        let h3NameTask = document.createElement('h3');
        h3NameTask.textContent = name;
        articleTask.appendChild(h3NameTask);

        let pDescriptionTask = document.createElement('p');
        pDescriptionTask.textContent = 'Description: ' + description;
        articleTask.appendChild(pDescriptionTask);

        let pDateTask = document.createElement('p');
        pDateTask.textContent = 'Due Date: ' + dueDate;
        articleTask.appendChild(pDateTask);

        let divButtons = document.createElement('div');
        divButtons.className = 'flex';
        let startButton = document.createElement('button');
        startButton.className = 'green';
        startButton.textContent = 'Start';
        divButtons.appendChild(startButton)
        let deleteButton = document.createElement('button');
        deleteButton.className = 'red';
        deleteButton.textContent = 'Delete';
        divButtons.appendChild(deleteButton);
        articleTask.appendChild(divButtons);

        openElement.children[1].appendChild(articleTask);
    }

    function onDeleteClick(event) {
        if (event.target.className == 'red') {
            let parentArticle = event.target.parentElement.parentElement;
            parentArticle.remove();
        }
    }

    function onStartClick(event) {
        if (event.target.className == 'green') {
            // get the the task (the whole article element)
            let taskElement = event.target.parentElement.parentElement;
            // move it to In progress section
            inProgressElement.children[1].appendChild(taskElement);
            //remove the start button
            taskElement.querySelector('.green').remove()
            //create finish button and add it
            let finishButton = document.createElement('button');
            finishButton.className = 'orange';
            finishButton.textContent = 'Finish';
            taskElement.querySelector('div').appendChild(finishButton);
        }
    }

    function onFinishClick(event) {
        if (event.target.className == 'orange') {
            let taskElement = event.target.parentElement.parentElement;
            // move the task to "Complete" section
            completeElement.children[1].appendChild(taskElement);
            // remove the delete buttons with the div
            taskElement.querySelector('div').remove();
        }
    }
}

