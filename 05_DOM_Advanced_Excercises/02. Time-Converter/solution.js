function attachEventsListeners() {

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    daysInputElement.value = 0
    hoursInputElement.value = 0;
    minutesInputElement.value = 0;
    secondsInputElement.value = 0;

    let daysForConversion = 0;

    let buttonElements = Array.from(document.querySelectorAll('input[type="button"]'))
    .forEach( e => e.addEventListener('click', onClick));

    let inputElements = Array.from(document.querySelectorAll('input[type="text"]'))

    // console.log(buttonElements.length)

    // daysInputElement.nextElementSibling.addEventListener('click', daysToOthers);
    // hoursInputElement.nextElementSibling.addEventListener('click', hoursToOthers)
    // minutesInputElement.nextElementSibling.addEventListener('click', minutesToOthers)
    // secondsInputElement.nextElementSibling.addEventListener('click', secondsToOthers)

    // function daysToOthers(event) {
    //     let days = Number(daysInputElement.value);
    //     let hours = days * 24;
    //     let minutes = days * 24 * 60;
    //     let seconds = days * 24 * 60 * 60;

    //     hoursInputElement.value = hours;
    //     minutesInputElement.value = minutes;
    //     secondsInputElement.value = seconds
    // }

    // function hoursToOthers(event) {
    //     let hours = Number(hoursInputElement.value);
    //     let days = hours / 24;
    //     let minutes = days * 24 * 60;
    //     let seconds = days * 24 * 60 * 60;

    //     daysInputElement.value = days;
    //     minutesInputElement.value = minutes;
    //     secondsInputElement.value = seconds
    // }

    function onClick(event) {
        //find which input was changed
        for (let el of inputElements) {
            let elValue = Number(el.value)
            if (elValue != 0 ) {
                
            }
        }


    }
}