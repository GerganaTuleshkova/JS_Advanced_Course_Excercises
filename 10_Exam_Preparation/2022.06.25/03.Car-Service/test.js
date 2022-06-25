const { expect } = require('chai');
const { carService } = require('./carService')


describe('Test carService object', () => {
    describe('creates object', () => {
        it('creates object', () => {
            expect(typeof carService).to.equal('object');
        });
    });

    describe('isItExpensive() tests', () => {
        it('returns correct message with issue = Engine or Transmission', () => {
            let issue = 'Engine';
            let expectedResult = `The issue with the car is more severe and it will cost more money`;
            expect(carService.isItExpensive(issue)).to.equal(expectedResult);
            expect(carService.isItExpensive('Transmission')).to.equal(expectedResult);
        });

        it('returns correct message with issue != Engine or Transmission', () => {
            let issue = 'Pump';
            let expectedResult = `The overall price will be a bit cheaper`;
            expect(carService.isItExpensive(issue)).to.equal(expectedResult);
        });
    });

    describe('discount() tests', () => {
        it('returns correct price with valid input and number > 2 and <= 7', () => {
            let numberOfParts = 3;
            let totalPrice = 100;

            let discountPercentage = 0;

            if (numberOfParts > 2 && numberOfParts <= 7) {
                discountPercentage = 15;
            } else if (numberOfParts > 7) {
                discountPercentage = 30;
            }

            let result = (discountPercentage / 100) * totalPrice;

            let expectedResult = `Discount applied! You saved ${result}$`
            expect(carService.discount(numberOfParts, totalPrice)).to.equal(expectedResult);
            expect(carService.discount(5, totalPrice)).to.equal(expectedResult);
            expect(carService.discount(7, totalPrice)).to.equal(expectedResult);
        });

        it('returns correct price with valid input and number > 7', () => {
            let numberOfParts = 3;
            let totalPrice = 100;

            let discountPercentage = 0;

            if (numberOfParts > 2 && numberOfParts <= 7) {
                discountPercentage = 15;
            } else if (numberOfParts > 7) {
                discountPercentage = 30;
            }

            let result = (discountPercentage / 100) * totalPrice;

            let expectedResult = `Discount applied! You saved ${result}$`
            expect(carService.discount(numberOfParts, totalPrice)).to.equal(expectedResult);
        });

        it('returns correct price with valid input and number <= 2', () => {
            let numberOfParts = 1;
            let totalPrice = 100;

            let expectedResult = 'You cannot apply a discount';
            expect(carService.discount(numberOfParts, totalPrice)).to.equal(expectedResult);
            expect(carService.discount(2, totalPrice)).to.equal(expectedResult);
        });

        it('throws error with invalid input', () => {
            let numberOfParts = 1;
            let totalPrice = 100;

            let expectedResult = 'Invalid input';
            expect(() => carService.discount('1', totalPrice)).to.throw(expectedResult);
            expect(() => carService.discount('a', totalPrice)).to.throw(expectedResult);
            expect(() => carService.discount(undefined, totalPrice)).to.throw(expectedResult);
            expect(() => carService.discount(numberOfParts, '100')).to.throw(expectedResult);
            expect(() => carService.discount(numberOfParts, 'a')).to.throw(expectedResult);
            expect(() => carService.discount(numberOfParts)).to.throw(expectedResult);
        });
    });

    describe('partsToBuy() tests', () => {
        it('returns correct price with valid input', () => {
            let partsCatalog = [
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 }
            ]
            let neededParts = ["blowoff valve", "injectors"]

            let totalSum = 0;

            if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
                throw new Error("Invalid input");
            }
            neededParts.forEach((neededPart) => {
                partsCatalog.map((obj) => {
                    if (obj.part === neededPart) {
                        totalSum += obj.price;
                    }
                });
            });
            let expectedResult = totalSum;
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(expectedResult);
        });

        it('returns correct price with valid input', () => {
            let partsCatalog = [
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 }
            ]
            let neededParts = ["blowoff valve", "coil springs"]

            let totalSum = 0;
            neededParts.forEach((neededPart) => {
                partsCatalog.map((obj) => {
                    if (obj.part === neededPart) {
                        totalSum += obj.price;
                    }
                });
            });
            let expectedResult = totalSum;
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(expectedResult);
        });

        it('returns correct price with valid input', () => {
            let partsCatalog = [

                { part: "coil springs", price: 230 }
            ]
            let neededParts = ["blowoff valve"];
            let totalSum = 0;
            neededParts.forEach((neededPart) => {
                partsCatalog.map((obj) => {
                    if (obj.part === neededPart) {
                        totalSum += obj.price;
                    }
                });
            });
            let expectedResult = totalSum;
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(expectedResult);
        });

        it('returns correct price with valid input (empty part array)', () => {
            let partsCatalog = [

            ]
            let neededParts = ["blowoff valve"]

            let totalSum = 0;

            neededParts.forEach((neededPart) => {
                partsCatalog.map((obj) => {
                    if (obj.part === neededPart) {
                        totalSum += obj.price;
                    }
                });
            });
            let expectedResult = totalSum;
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(expectedResult);
        });

        it('throes error with invalid input', () => {
            let partsCatalog = [
                { part: "coil springs", price: 230 }

            ]
            let neededParts = ["blowoff valve"];
            let expectedResult = 'Invalid input';
            expect(() => carService.partsToBuy('[]', neededParts)).to.throw(expectedResult);
            expect(() => carService.partsToBuy(partsCatalog, '[]')).to.throw(expectedResult);
            expect(() => carService.partsToBuy(partsCatalog, )).to.throw(expectedResult);
        });
    });
});

