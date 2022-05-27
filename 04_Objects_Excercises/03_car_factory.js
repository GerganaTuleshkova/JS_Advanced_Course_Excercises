function carFactory(carRequirementsObject) {
    // create made car object with the model required
    const madeCar = {
        model: carRequirementsObject.model,
    };
    
    // engine options as object
    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }
    // select the engine and add it to made car object
    for (let engineOption of Object.values(engines)) {
        if (carRequirementsObject.power <= engineOption.power) {
            madeCar.engine = engineOption;
            break;
        }
    }

    // add directly the carriege and the color to made car
    madeCar.carriage = {
        type: carRequirementsObject.carriage,
        color: carRequirementsObject.color,
    }
 
    // calculate the wheel size and add it to made car
    let wheels = [];
    let wheelSize = carRequirementsObject.wheelsize;
    wheelSize = (wheelSize % 2 == 0 ? wheelSize - 1 : wheelSize);
    for (let i = 0; i < 4; i++) {
        wheels.push(wheelSize);
    }
    madeCar.wheels = wheels;

    // return the made car
    return madeCar;
}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));