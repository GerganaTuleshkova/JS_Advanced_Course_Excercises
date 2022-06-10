const { assert, expect } = require('chai');
const { mathEnforcer } = require('./math_enforcer');

describe('Test mathEnforcer object', () => {

    describe('addFive tests', () => {

        it('returns correct result with integer number', () => {
            expect(mathEnforcer.addFive(2)).to.equal(7);
        });

        it('returns correct result with float number', () => {
            expect(mathEnforcer.addFive(2.2)).to.equal(7.2);
        });

        it('returns correct result with negative integer number', () => {
            expect(mathEnforcer.addFive(-2)).to.equal(3);
        });

        it('returns correct result with negative float number', () => {
            expect(mathEnforcer.addFive(-2.2)).to.equal(2.8);
        });

        it('returns undefined with valid string', () => {
            expect(mathEnforcer.addFive('2')).to.equal(undefined);
        });

        it('returns undefined with no argument', () => {
            expect(mathEnforcer.addFive()).to.equal(undefined);
        });

    });

    describe('subtractTen tests', () => {

        it('returns correct result with integer number', () => {
            expect(mathEnforcer.subtractTen(2)).to.equal(-8);
        });

        it('returns correct result with float number', () => {
            expect(mathEnforcer.subtractTen(10.2).toFixed(2)).to.equal((10.2 - 10).toFixed(2));
        });

        it('returns correct result with negative integer number', () => {
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
        });

        it('returns correct result with negative float number', () => {
            expect(mathEnforcer.subtractTen(-2.2).toFixed(2)).to.equal((-2.2 - 10).toFixed(2));
        });

        it('returns undefined with valid string', () => {
            expect(mathEnforcer.subtractTen('2')).to.equal(undefined);
        });

        it('returns undefined with no argument', () => {
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
        });

    });

    describe('sum tests', () => {

        it('returns correct result with integer numbers', () => {
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
        });

        it('returns correct result with float numbers', () => {
            expect(mathEnforcer.sum(10.2, 5.4).toFixed(2)).to.equal((10.2 + 5.4).toFixed(2));
        });

        it('returns correct result with negative integer numbers', () => {
            expect(mathEnforcer.sum(-2, -5)).to.equal(-7);
        });

        it('returns correct result with negative float numbers', () => {
            expect(mathEnforcer.sum(-2.2, -7.6).toFixed(2)).to.equal((-2.2 -7.6).toFixed(2));
        });

        it('returns undefined with one string and one number', () => {
            expect(mathEnforcer.sum('2', 6)).to.equal(undefined);
        });

        it('returns undefined with one number and one string', () => {
            expect(mathEnforcer.sum(6, '2')).to.equal(undefined);
        });

        it('returns undefined with no argument', () => {
            expect(mathEnforcer.sum()).to.equal(undefined);
        });

    });
})