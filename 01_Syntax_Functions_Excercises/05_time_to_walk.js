function timeToWalk(stepsToUni, footprintInM, speedKmH) {
    let distance = stepsToUni * footprintInM;
    let restsCount = Math.floor(distance / 500);
    let timeInSec = ((distance / 1000) / speedKmH) * 60 * 60;
    timeInSec += restsCount * 60;

    let secondsNeeded = Math.ceil(timeInSec % 60);
    let minutesNeeded = Math.floor(timeInSec / 60);
    let hoursNeeded = Math.floor(minutesNeeded / 60);

    console.log(
        `${String(hoursNeeded).padStart(2, '0')}
    :${String(minutesNeeded).padStart(2, '0')}
    :${String(secondsNeeded).padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
