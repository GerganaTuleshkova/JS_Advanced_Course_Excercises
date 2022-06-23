const { expect } = require('chai');
const { testNumbers } = require('./testNumbers');


describe('Test testNumbers object', () => {
    describe('creation tests', () => {
        it('creates object', () => {
            expect(typeof testNumbers).to.be.equal('object');
        });
    });

    describe('sumNumbers() tests', () => {
        it('returns correct sum with positive numbers as params', () => {
            let num1 = 1;
            let num2 = 2;
            let expectedResult = (num1 + num2).toFixed(2);
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(expectedResult);
        });

        it('returns correct sum with negtive numbers as params', () => {
            let num1 = -1;
            let num2 = -2;
            let expectedResult = (num1 + num2).toFixed(2);
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(expectedResult);
        });

        it('returns correct sum with floating numbers as params', () => {
            let num1 = 1.244444;
            let num2 = 6.111111;
            let expectedResult = (num1 + num2).toFixed(2);
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(expectedResult);
        });

        it('returns undefined with first param not a number', () => {
            let num1 = 'a';
            let num2 = -2;
            let expectedResult = undefined;
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(expectedResult);
        });

        it('returns undefined with second param not a number', () => {
            let num1 = 1;
            let num2 = 'a';
            let expectedResult = undefined;
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(expectedResult);
        });

        it('returns undefined with both params not a number', () => {
            let num1 = 'a';
            let num2 = 'a';
            let expectedResult = undefined;
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(expectedResult);
        });

        it('returns undefined with one param not passed', () => {
            let num1 = 'a';
            let expectedResult = undefined;
            expect(testNumbers.sumNumbers(num1)).to.equal(expectedResult);
        });

        it('returns undefined with no param passed', () => {
            let expectedResult = undefined;
            expect(testNumbers.sumNumbers()).to.equal(expectedResult);
        });
    });

    describe('numberChecker() tests', () => {
        it('returns even with even numbers as param', () => {
            let input = 2;
            let expectedResult = 'The number is even!';
            expect(testNumbers.numberChecker(input)).to.equal(expectedResult);
        });

        it('returns even with 0 numbers as param', () => {
            let input = 0;
            let expectedResult = 'The number is even!';
            expect(testNumbers.numberChecker(input)).to.equal(expectedResult);
            expect(testNumbers.numberChecker('2')).to.equal(expectedResult);
        });

        it('returns odd with odd numbers as param', () => {
            let input = 1;
            let expectedResult = 'The number is odd!';
            expect(testNumbers.numberChecker(input)).to.equal(expectedResult);
            expect(testNumbers.numberChecker(-1)).to.equal(expectedResult);
            expect(testNumbers.numberChecker(3)).to.equal(expectedResult);
            expect(testNumbers.numberChecker('3')).to.equal(expectedResult);
            expect(testNumbers.numberChecker(101)).to.equal(expectedResult);
            expect(testNumbers.numberChecker(true)).to.equal(expectedResult);

        });

        it('throws error with param not a number', () => {
            let input = "aa";
            let expectedResult = 'The input is not a number!';
            expect(() => testNumbers.numberChecker(input)).to.throw(expectedResult);
        });

        it('throws error with param not a number', () => {
            let expectedResult = 'The input is not a number!';
            expect(() => testNumbers.numberChecker()).to.throw(expectedResult);
        });
    });

    describe('averageArray() tests', () => {
        it('returns correct average number', () => {
            let arr = [1, 2, 3];
            let arraySum = 0;

            for (let i = 0; i < arr.length; i++) {
                arraySum += arr[i];
            }

            let expectedResult = arraySum / arr.length;
            expect(testNumbers.averageSumArray(arr)).to.equal(expectedResult);
        });

        it('returns correct average number', () => {
            let arr = [1];
            let arraySum = 0;

            for (let i = 0; i < arr.length; i++) {
                arraySum += arr[i]
            }

            let expectedResult = arraySum / arr.length;
            expect(testNumbers.averageSumArray(arr)).to.equal(expectedResult);
        });

        it('returns correct average number', () => {
            let arr = [-1, -2, 3];
            let arraySum = 0;

            for (let i = 0; i < arr.length; i++) {
                arraySum += arr[i]
            }

            let expectedResult = arraySum / arr.length;
            expect(testNumbers.averageSumArray(arr)).to.equal(expectedResult);
        });
    });
});