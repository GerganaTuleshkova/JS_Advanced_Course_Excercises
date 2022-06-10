function notify(message) {
  let notificationElement = document.getElementById('notification');
  let messageElement = document.createElement('p');
  messageElement.textContent = message;
  notificationElement.style.display = 'block'
  notificationElement.appendChild(messageElement);

  notificationElement.addEventListener('click', onMessageClick);

  function onMessageClick(event) {
    notificationElement.style.display = 'none';
  }
}