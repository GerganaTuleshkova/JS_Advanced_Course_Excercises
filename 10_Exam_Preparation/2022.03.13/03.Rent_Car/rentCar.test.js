const { expect } = require('chai');
const { rentCar } = require('./rentCar');


describe('Test rentCar object', () => {
    let catalogue = {
        Volkswagen: 20,
        Audi: 36,
        Toyota: 40,
        BMW: 45,
        Mercedes: 50
    };
    describe('creation', () => {
        it('creates object', () => {
            expect(typeof rentCar).to.equal('object');
        });
    });

    describe('searchCar() tests', () => {
        it('returns correct message with 1 car on list', () => {
            let shop = ["Volkswagen", "BMW", "Audi"];
            let model = 'BMW';
            let expectedResult = `There is 1 car of model ${model} in the catalog!`;
            expect(rentCar.searchCar(shop, model)).to.equal(expectedResult);
        });

        it('returns correct message with 2 cars on list', () => {
            let shop = ["Volkswagen", "BMW", "BMW", "Audi"];
            let model = 'BMW';
            let expectedResult = `There is 2 car of model ${model} in the catalog!`;
            expect(rentCar.searchCar(shop, model)).to.equal(expectedResult);
        });

        it('throws error with car not on list', () => {
            let shop = ["Volkswagen", "BMW", "BMW", "Audi"];
            let model = 'Honda';
            let expectedResult = `There are no such models in the catalog!`;
            expect(() => rentCar.searchCar(shop, model)).to.throw(expectedResult);
        });

        it('throws error with invalid input', () => {
            let shop = ["Volkswagen", "BMW", "BMW", "Audi"];
            let model = 'BMW';
            let expectedResult = `Invalid input!`;
            expect(() => rentCar.searchCar(shop, 2)).to.throw(expectedResult);
            expect(() => rentCar.searchCar("shop", model)).to.throw(expectedResult);
        });
    });

    describe('calculatePriceOfCar() tests', () => {
        it('returns correct message with valid input and car in catalog', () => {
            let model = 'BMW';
            let days = 5;
            let cost = catalogue[model] * days;
            let expectedResult = `You choose ${model} and it will cost $${cost}!`;
            expect(rentCar.calculatePriceOfCar(model, days)).to.equal(expectedResult);
        });

        it('throws error with valid input and car NOT in catalog', () => {
            let model = 'Honda';
            let days = 5;
            let expectedResult = 'No such model in the catalog!';
            expect(() => rentCar.calculatePriceOfCar(model, days)).to.throw(expectedResult);
        });

        it('throws error with invalid input', () => {
            let model = 'Honda';
            let days = 5;
            let expectedResult = 'Invalid input!';
            expect(() => rentCar.calculatePriceOfCar(model, '5')).to.throw(expectedResult);
            expect(() => rentCar.calculatePriceOfCar(model, 5.5)).to.throw(expectedResult);
            expect(() => rentCar.calculatePriceOfCar(model,)).to.throw(expectedResult);
            expect(() => rentCar.calculatePriceOfCar(5, days)).to.throw(expectedResult);
            expect(() => rentCar.calculatePriceOfCar(undefined, days)).to.throw(expectedResult);
        });
    });
    
    describe('checkBudget() tests', () => {
        it('returns correct message with valid input and enough budget', () => {
            let costPerDay = 10;
            let days = 10;
            let budget = 500
            let expectedResult = `You rent a car!`;
            expect(rentCar.checkBudget(costPerDay, days, budget)).to.equal(expectedResult);
            expect(rentCar.checkBudget(costPerDay, days, 100)).to.equal(expectedResult);
        });

        it('returns correct message with valid input and NOT enough budget', () => {
            let costPerDay = 10;
            let days = 10;
            let budget = 99
            let expectedResult = `You need a bigger budget!`;
            expect(rentCar.checkBudget(costPerDay, days, budget)).to.equal(expectedResult);
        });

        it('throws error with invalid input', () => {
            let costPerDay = 10;
            let days = 10;
            let budget = 99
            let expectedResult = 'Invalid input!';
            expect(() => rentCar.checkBudget('10', days, budget)).to.throw(expectedResult);
            expect(() => rentCar.checkBudget(10.5, days, budget)).to.throw(expectedResult);
            expect(() => rentCar.checkBudget(undefined, days, budget)).to.throw(expectedResult);
            expect(() => rentCar.checkBudget(costPerDay, '10', budget)).to.throw(expectedResult);
            expect(() => rentCar.checkBudget(costPerDay, 10.5, budget)).to.throw(expectedResult);
            expect(() => rentCar.checkBudget(costPerDay, undefined, budget)).to.throw(expectedResult);
            expect(() => rentCar.checkBudget(costPerDay, days, '100')).to.throw(expectedResult);
            expect(() => rentCar.checkBudget(costPerDay, days, 100.5)).to.throw(expectedResult);
            expect(() => rentCar.checkBudget(costPerDay, days)).to.throw(expectedResult);
        });
    });
});
