class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if ((typeof model != 'string')
            || model.length == 0
            || !Number.isInteger(horsepower)
            || horsepower < 0
            || isNaN(price)
            || price < 0
            || isNaN(mileage)
            || mileage < 0
        ) {
            throw new Error('Invalid input!')
        }

        let carObj = {
            model,
            horsepower,
            price,
            mileage,
        }

        this.availableCars.push(carObj);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let existingCar = this.availableCars.find(c => c.model == model);
        if (!existingCar) {
            throw new Error(`${model} was not found!`);
        }

        let sellingPrice;

        if (existingCar.mileage <= desiredMileage) {
            sellingPrice = existingCar.price;
        }
        else if (existingCar.mileage - desiredMileage <= 40000) {
            sellingPrice = existingCar.price * 0.95;
        }

        else if (existingCar.mileage - desiredMileage > 40000) {
            sellingPrice = existingCar.price * 0.90;
        }

        const index = this.availableCars.indexOf(existingCar);
        this.availableCars.splice(index, 1);

        let soldCarObj = {
            model,
            horsepower: existingCar.horsepower,
            soldPrice: sellingPrice,
        }

        this.soldCars.push(soldCarObj);
        this.totalIncome += sellingPrice;
        return `${model} was sold for ${sellingPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }

        let result = [];
        result.push('-Available cars:')
        for (let c of this.availableCars) {
            result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        }

        return result.join('\n');
    }

    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error('Invalid criteria!');
        }

        let sortedCars;

        if (criteria == 'horsepower') {
            sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        else if (criteria == 'model') {
            sortedCars = this.soldCars.sort((a, b) => (a.model).localeCompare(b.model));
        }

        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        for (let c of sortedCars) {
            result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)
        }
        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 1000, 100000);
dealership.addCar('Mercedes C63', 300, 1000, 10000);
dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 1500000));
// console.log(dealership.sellCar('Toyota Corolla', 60000));
console.log(dealership.sellCar('Toyota Corolla', 50000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.soldCars[0]);
console.log(dealership.availableCars[0]);
// console.log(dealership.sellCar('BMW', 110000));
