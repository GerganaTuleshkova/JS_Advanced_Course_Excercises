function lockedProfile() {
    let parentMainElement = document.getElementById('main');
    parentMainElement.addEventListener('click', onClick, true);

    function onClick(event) {
        if (event.target.nodeName == 'BUTTON') {
            if (!isLocked(event)) {
                let hiddenFields = event.target.parentElement.querySelector('div')
                if (event.target.textContent == 'Show more') {
                    hiddenFields.style.display = 'block';
                    event.target.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    event.target.textContent = 'Show more';
                }
            }
        }
    }

    function isLocked(event) {
        return (event.target.parentElement.querySelector('input[value="lock"]').checked);
    }
}