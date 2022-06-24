const { expect } = require('chai');
const { flowerShop } = require('./flowerShop')


describe('Test flowerShop object', () => {
    describe('creates object', () => {
        it('creates object', () => {
            expect(typeof flowerShop).to.equal('object');
        });
    });

    describe('calcPriceOfFlowers() tests', () => {
        it('returns correct message with valid input', () => {
            let flower = 'daisy';
            let price = 20;
            let quantity = 2;

            let expectedResult = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`;
            expect(flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.equal(expectedResult);
        });

        it('returns correct message with valid input', () => {
            let flower = 'daisy';
            let price = 20;
            let quantity = 0;

            let expectedResult = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`;
            expect(flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.equal(expectedResult);
        });

        it('throws error with invalid input', () => {
            let flower = 'daisy';
            let price = 20;
            let quantity = 2;

            let expectedResult = `Invalid input!`;
            expect(() => flowerShop.calcPriceOfFlowers(2, price, quantity)).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(undefined, price, quantity)).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, '2', quantity)).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, 2.2, quantity)).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, 'aa', quantity)).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, undefined, quantity)).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, price, 2.2)).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, price, '1')).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, price, 'aa')).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, price, undefined)).to.throw(expectedResult);
            expect(() => flowerShop.calcPriceOfFlowers(flower, price)).to.throw(expectedResult);
        });
    });

    describe('checkFlowersAvailable() tests', () => {
        it('returns correct message with flowir in list', () => {
            let flower = 'Rose';
            let gardenArr = ["Rose", "Lily", "Orchid"];
            let expectedResult = `The ${flower} are available!`;
            expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(expectedResult);
        });

        it('returns correct message with flowir in list', () => {
            let flower = 'Lily';
            let gardenArr = ["Rose", "Lily", "Orchid"];
            let expectedResult = `The ${flower} are available!`;
            expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(expectedResult);
        });

        it('returns correct message with flowir in list', () => {
            let flower = 'Orchid';
            let gardenArr = ["Rose", "Lily", "Orchid"];
            let expectedResult = `The ${flower} are available!`;
            expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(expectedResult);
        });

        it('returns correct message with flowir NOT in list', () => {
            let flower = 'Daisy';
            let gardenArr = ["Rose", "Lily", "Orchid"];
            let expectedResult = `The ${flower} are sold! You need to purchase more!`;
            expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(expectedResult);
        });
    });

    describe('sellFlowers() tests', () => {
        it('returns correct array with valid input', () => {
            let space = 2;
            let gardenArr = ["Rose", "Lily", "Orchid"];

            let shop = [];
            let i = 0;
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            };
            let expectedResult = shop.join(' / ');
            expect(flowerShop.sellFlowers(gardenArr, space)).to.eql(expectedResult);
        });

        it('returns correct array with valid input', () => {
            let space = 0;
            let gardenArr = ["Rose", "Lily", "Orchid"];

            let shop = [];
            let i = 0;
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            };
            let expectedResult = shop.join(' / ');
            expect(flowerShop.sellFlowers(gardenArr, space)).to.eql(expectedResult);
        });

        it('returns correct array with valid input', () => {
            let space = 1;
            let gardenArr = ["Rose", "Lily", "Orchid"];

            let shop = [];
            let i = 0;
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            };
            let expectedResult = shop.join(' / ');
            expect(flowerShop.sellFlowers(gardenArr, space)).to.eql(expectedResult);
        });

        it('trows error with invalid input', () => {
            let space = 1;
            let gardenArr = ["Rose", "Lily", "Orchid"];

            let expectedResult = 'Invalid input!'
            expect(() => flowerShop.sellFlowers('aa', space)).to.throw(expectedResult);
            expect(() => flowerShop.sellFlowers([], 0)).to.throw(expectedResult);
            expect(() => flowerShop.sellFlowers(undefined, 0)).to.throw(expectedResult);
            expect(() => flowerShop.sellFlowers(gardenArr, "0")).to.throw(expectedResult);
            expect(() => flowerShop.sellFlowers(gardenArr, 1.1)).to.throw(expectedResult);
            expect(() => flowerShop.sellFlowers(gardenArr, undefined)).to.throw(expectedResult);
            expect(() => flowerShop.sellFlowers(gardenArr, -1)).to.throw(expectedResult);
            expect(() => flowerShop.sellFlowers(gardenArr, 3)).to.throw(expectedResult);
        });
    });
});
