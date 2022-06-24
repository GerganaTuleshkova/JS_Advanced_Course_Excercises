function solve() {
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let addButton = document.getElementById('add');
    let resetButton = document.getElementById('reset');
    let listOfMails = document.getElementById('list');
    let sentMessagesList = document.querySelector('.sent-list');
    let deletedMessagesList = document.querySelector('.delete-list');

    addButton.addEventListener('click', addMail);
    resetButton.addEventListener('click', reset);

    function reset(event) {
        event.preventDefault()
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    function addMail(event) {
        event.preventDefault()
        if (recipientName.value != ''
            && title.value != ''
            && message.value != '') {

            mailObj = {
                title: title.value,
                recipientName: recipientName.value,
                message: message.value
            }

            let mailLi = document.createElement('li');
            mailLi.innerHTML = `\
                <h4>Title: ${title.value}</h4>\
                <h4>Recipient Name: ${recipientName.value}</h4>\
                <span>${message.value}</span>\
                <div id="list-action">\
                <button type="submit" id="send">Send</button>\
                <button type="submit" id="delete">Delete</button>\
                </div>`;

            listOfMails.appendChild(mailLi);
            reset(event);

            let [sendButton, deleteButton] = mailLi.querySelectorAll('button');

            sendButton.addEventListener('click', sendMessage);
            deleteButton.addEventListener('click', deleteMessage);

            function sendMessage(event) {
                mailLi.remove();
                let sentMessageElement = document.createElement('li');
                sentMessageElement.innerHTML = `\
                <span>To: ${mailObj.recipientName}</span>\
                <span>Title: ${mailObj.title}</span>\
                <div class="btn">\
                <button type="submit" class="delete">Delete</button>\
                </div>`;
                sentMessagesList.appendChild(sentMessageElement);

                sentMessageElement.querySelector('button').addEventListener('click', deleteMessage);
            }

            function deleteMessage(event) {
                if (event.target.className == 'delete' || event.target.id == "delete") {
                    console.log(mailObj.title)
                    event.target.parentElement.parentElement.remove();
                    let deletedMessage = document.createElement('li');
                    deletedMessage.innerHTML = `\
                    <span>To: ${mailObj.recipientName}</span>\
                    <span>Title: ${mailObj.title}</span>`;
                    deletedMessagesList.appendChild(deletedMessage);
                }
            }
        }
    }
}



solve()