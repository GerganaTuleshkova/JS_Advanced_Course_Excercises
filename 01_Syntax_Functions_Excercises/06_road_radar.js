function roadRadar(speed, area) {
    let speedLimit;
    if (area == 'motorway') {
        speedLimit = 130;
    }
    else if (area == 'interstate') {
        speedLimit = 90;
    }
    else if (area == 'city') {
        speedLimit = 50;
    }
    else if (area  == 'residential') {
        speedLimit = 20;
    }

    let difference = speed - speedLimit;

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return;
    }

    let status = '';

    if (difference > 40) {
        status = 'reckless driving';
    } else if (difference > 20) {
        status = 'excessive speeding';
    } else {
        status = 'speeding'
    }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');