function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener("click", calculate);

    function calculate() {

        let inputValue = Number(document.getElementById('inputDistance').value);
        let inputUnit = document.getElementById('inputUnits').value;
        let mapper = {
            m: 1,
            km: 0.001,
            cm: 100,
            mm: 1000,
            mi: 0.000621371,
            yrd: 1.09361,
            ft: 3.28083,
            in: 39.36996,
        }

        let outputUnit = document.getElementById('outputUnits').value;
        let result = (inputValue / mapper[inputUnit]) * mapper[outputUnit];

        document.getElementById('outputDistance').value = result;
    }
}