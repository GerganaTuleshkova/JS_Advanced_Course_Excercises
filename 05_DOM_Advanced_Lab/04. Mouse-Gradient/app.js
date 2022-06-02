function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
        let offsetInPercents = Math.floor(event.offsetX / gradient.clientWidth * 100);
        document.getElementById('result').textContent = `${offsetInPercents}%`;
    }
}