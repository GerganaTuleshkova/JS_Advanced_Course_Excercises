const { assert } = require('chai');
const { createCalculator } = require('./add_subtract')

describe('Test createCalculator Function', () => {

    // beforeEach(() => {
    //     let calc = createCalculator();
    // })

    //object tests
    it('returns an object', () => {
        let calc = createCalculator();
        assert.equal(typeof calc, 'object');
    });

    it('returns an object with add method', () => {
        let calc = createCalculator();
        assert.isTrue(calc.hasOwnProperty('add'));
    });

    it('returns an object with get method', () => {
        let calc = createCalculator();
        assert.isTrue(calc.hasOwnProperty('get'));
    });

    it('returns an object with subtract method', () => {
        let calc = createCalculator();
        assert.isTrue(calc.hasOwnProperty('subtract'));
    });

    // add tests
    it('returns correct value with add 3', () => {
        let calc = createCalculator();
        calc.add(3);
        assert.equal(calc.get(), 3);
    });

    it('returns correct value with several add', () => {
        let calc = createCalculator();
        calc.add(3);
        calc.add(3);
        assert.equal(calc.get(), 6);
    });

    it('returns correct value with add string 3', () => {
        let calc = createCalculator();
        calc.add('3');
        assert.equal(calc.get(), 3)
    });

    it('returns correct value with add with negative value', () => {
        let calc = createCalculator();
        calc.add(-6);
        assert.equal(calc.get(), -6)
    });

    it('returns NaN with add with string word', () => {
        let calc = createCalculator();
        calc.add('hello');
        assert(isNaN(calc.get()))
    });

    it('returns NaN with add with no argument', () => {
        let calc = createCalculator();
        calc.add();
        assert(isNaN(calc.get()))
    });

    // subtract tests
    it('returns correct value with subtract with positive value', () => {
        let calc = createCalculator();
        calc.subtract(6);
        assert.equal(calc.get(), -6)
    });

    it('returns correct value with subtract with string value 3', () => {
        let calc = createCalculator();
        calc.subtract('3');
        assert.equal(calc.get(), -3)
    });

    it('returns correct value with subtract with negative value', () => {
        let calc = createCalculator();
        calc.subtract(-6);
        assert.equal(calc.get(), 6)
    });

    it('returns NaN with subtract with string word', () => {
        let calc = createCalculator();
        calc.subtract('hello');
        assert(isNaN(calc.get()))
    });

    it('returns NaN with subtract with no argument', () => {
        let calc = createCalculator();
        calc.subtract();
        assert(isNaN(calc.get()))
    });

    it('returns correct value with several subtract', () => {
        let calc = createCalculator();
        calc.subtract(3);
        calc.subtract(3);
        assert.equal(calc.get(), -6);
    });

    // add and subtract tests
    it('returns correct value with add and subtract', () => {
        let calc = createCalculator();
        calc.add(3);
        calc.subtract(3);
        assert.equal(calc.get(), 0)
    });

    it('returns NaN with add and string subtract number as string', () => {
        let calc = createCalculator();
        calc.add('A');
        calc.subtract('3');
        assert(isNaN(calc.get()))
    });

    it('returns correct value with add and subtract 1, 2, 4', () => {
        let calc = createCalculator();
        calc.add(1);
        calc.add(2);
        calc.subtract(4);
        assert.equal(calc.get(), -1)
    });

    it('returns correct value with add and subtract as strings', () => {
        let calc = createCalculator();
        calc.add('1');
        calc.subtract('2');
        calc.subtract('4');
        assert.equal(calc.get(), -5)
    });

    // value test
    it('returns undefined for value', () => {
        let calc = createCalculator();

        assert.equal(calc.value, undefined)
    });

    it('returns 0 if no methods are called', () => {
        let calc = createCalculator();
        assert.equal(calc.get(), 0);
    });
}
)