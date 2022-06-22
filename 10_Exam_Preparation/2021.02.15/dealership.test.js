const { expect } = require('chai');
const { dealership } = require('./dealership');

describe('Test dealership object', () => {
    it('creates valid object', () => {
        expect(typeof dealership).to.be.equal('object');
    });

    describe('newCarCost() tests', () => {

        it('returns valid new car price with old car on discaunt list', () => {
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
                'Audi A8 D5': 25000,
                'Audi TT 8J': 14000,
            }
            let oldCarModel = 'Audi A4 B8';
            let newCarPrice = 50000;

            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.be.equal(newCarPrice - discountForOldCar[oldCarModel]);
        });

        it('returns valid new car price with old car not on discaunt list', () => {
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
                'Audi A8 D5': 25000,
                'Audi TT 8J': 14000,
            }
            let oldCarModel = 'BMW';
            let newCarPrice = 50000;

            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.be.equal(newCarPrice);
        });
    });

    describe('carEquipment() tests', () => {
        it('returns correct array with some indecises', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [1, 3];

            let selectedExtras = [];
            indexArr.forEach(i => {
                selectedExtras.push(extrasArr[i]);
            });

            expect(dealership.carEquipment(extrasArr, indexArr)).to.eql(selectedExtras);
        });

        it('returns correct array with some indecises', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [0];

            let selectedExtras = [];
            indexArr.forEach(i => {
                selectedExtras.push(extrasArr[i]);
            });

            expect(dealership.carEquipment(extrasArr, indexArr)).to.eql(selectedExtras);
        });

        it('returns correct array with some indecises', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [];

            let selectedExtras = [];
            indexArr.forEach(i => {
                selectedExtras.push(extrasArr[i]);
            });

            expect(dealership.carEquipment(extrasArr, indexArr)).to.eql(selectedExtras);
        });
    });

    describe('euroCategory() tests', () => {
        it('returns correct message and price with category = 5', () => {
            let category = 5;
            let price = dealership.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)

            let expectedResult = `We have added 5% discount to the final price: ${total}.`;

            expect(dealership.euroCategory(category)).to.equal(expectedResult);
        });

        it('returns correct message and price with category = 4', () => {
            let category = 4;
            let price = dealership.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05);

            let expectedResult = `We have added 5% discount to the final price: ${total}.`;

            expect(dealership.euroCategory(category)).to.equal(expectedResult);
        });

        it('returns correct message and price with category = 3', () => {
            let category = 3;
            let expectedResult = 'Your euro category is low, so there is no discount from the final price!';

            expect(dealership.euroCategory(category)).to.equal(expectedResult);
        });
    });
});

