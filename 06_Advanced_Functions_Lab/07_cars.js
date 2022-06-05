function cars(arrOfStrings) {
    let carsList = {};

    let commands = {
        create(name, inherit = undefined, parent = undefined) {
            carsList[name] = inherit? Object.create(carsList[parent]) : {};
        },
        set: (name, key, value) => carsList[name][key] = value,
        print(name) {
            let text = [];
            let currentCar = carsList[name];
            for (let key in currentCar) {
                text.push(`${key}:${currentCar[key]}`)
            }
            console.log(text.join(','))
        }
    }

    for (let data of arrOfStrings) {
        let [command, name, key, value] = data.split(' ');
        commands[command](name, key, value);
    }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);