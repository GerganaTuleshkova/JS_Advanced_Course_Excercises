const { expect } = require('chai');
const { numberOperations } = require('./numberOperations')

describe('Test numberOperations object', () => {
    describe('creation tests', () => {
        it('creates object', () => {
            expect(typeof numberOperations).to.be.equal('object');
        });
    });

    describe('powNumber() tests', () => {
        it('returns correct result with number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(1)).to.equal(1);
            expect(numberOperations.powNumber(-2)).to.equal(4);
        });
    });

    describe('numberChecker() tests', () => {
        it('returns correct message with number = 100', () => {
            let expectedResult = 'The number is greater or equal to 100!'
            expect(numberOperations.numberChecker(100)).to.equal(expectedResult);
            expect(numberOperations.numberChecker('100')).to.equal(expectedResult);

        });

        it('returns correct message with number = 101', () => {
            let expectedResult = 'The number is greater or equal to 100!'
            expect(numberOperations.numberChecker(101)).to.equal(expectedResult);
            expect(numberOperations.numberChecker('101')).to.equal(expectedResult);
        });

        it('returns correct message with number = 99', () => {
            let expectedResult = 'The number is lower than 100!'
            expect(numberOperations.numberChecker(99)).to.equal(expectedResult);
            expect(numberOperations.numberChecker('99')).to.equal(expectedResult);
        });

        it('trows error with input NaN', () => {
            let expectedResult = 'The input is not a number!';
            expect(() => numberOperations.numberChecker('aaa')).to.throw(expectedResult);
            expect(() => numberOperations.numberChecker()).to.throw(expectedResult);
        });
    });

    describe('sumArray() tests', () => {
        it('returns correct new array', () => {
            let array1 = [1, 2, 3, 4];
            let array2 = [1, 2, 3];

            const longerArr = array1.length > array2.length ? array1 : array2;
            const rounds = array1.length < array2.length ? array1.length : array2.length;

            const resultArr = [];

            for (let i = 0; i < rounds; i++) {
                resultArr.push(array1[i] + array2[i]);
            }

            resultArr.push(...longerArr.slice(rounds));
            expect(numberOperations.sumArrays(array1, array2)).to.eql(resultArr);
        });

        it('returns correct new array', () => {
            let array1 = [1, 2, 3];
            let array2 = [1, 2, 3, 4, 5];

            const longerArr = array1.length > array2.length ? array1 : array2;
            const rounds = array1.length < array2.length ? array1.length : array2.length;

            const resultArr = [];

            for (let i = 0; i < rounds; i++) {
                resultArr.push(array1[i] + array2[i]);
            }

            resultArr.push(...longerArr.slice(rounds));
            expect(numberOperations.sumArrays(array1, array2)).to.eql(resultArr);
        });

        it('returns correct new array', () => {
            let array1 = [1, 2, 3, 4];
            let array2 = [1, 2, 3, 4];

            const longerArr = array1.length > array2.length ? array1 : array2;
            const rounds = array1.length < array2.length ? array1.length : array2.length;

            const resultArr = [];

            for (let i = 0; i < rounds; i++) {
                resultArr.push(array1[i] + array2[i]);
            }

            resultArr.push(...longerArr.slice(rounds));
            expect(numberOperations.sumArrays(array1, array2)).to.eql(resultArr);
        });
    });
});

