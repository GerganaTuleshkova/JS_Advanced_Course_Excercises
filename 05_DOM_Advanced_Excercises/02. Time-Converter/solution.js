function attachEventsListeners() {
    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    let buttonElements = Array.from(document.querySelectorAll('input[type="button"]'))
        .forEach(e => e.addEventListener('click', onClick));

    let mapper = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function onClick(event) {
        // get the enterred value
        let inputElement = event.target.parentElement.querySelector('input[type="text"]');
        let type = inputElement.id;
        let valueEnterred = inputElement.value;

        let days = valueEnterred / mapper[type];
        let hours = days * mapper.hours;
        let minutes = days * mapper.minutes;
        let seconds = days * mapper.seconds;

        daysInputElement.value = days;
        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;
    }
}