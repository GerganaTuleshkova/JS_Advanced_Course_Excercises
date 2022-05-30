function toggle() {
    let buttonText = document.getElementsByClassName('button')[0].textContent;
    let hiddenTextStyle = document.getElementById('extra').style.display;

    if (buttonText == 'More') {
        document.getElementsByClassName('button')[0].textContent = 'Less'
        document.getElementById('extra').style.display = 'block'
    } else if (buttonText == 'Less') {
        document.getElementsByClassName('button')[0].textContent = 'More';
        document.getElementById('extra').style.display = 'none'
    }
}