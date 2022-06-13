function makeCars(arr) {
    let carsMade = new Map();

    for (let input of arr) {
        let [brand, model, qty] = input.split(' | ');
        qty = Number(qty);

        if (!carsMade.has(brand)) {
            carsMade.set(brand, {})
        }

        if (!carsMade.get(brand)[model]) {
            carsMade.set(brand, {...carsMade.get(brand), [model]: 0})
        }

        let newObj = carsMade.get(brand);
        newObj[model] += qty
        carsMade.set(brand, newObj)
    }

    for (let [brand, models] of carsMade) {
        console.log(brand);
        for (let [model, qty] of Object.entries(models)) {
            console.log(`###${model} -> ${qty}`);
        }
    }
    
    
}

makeCars(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)