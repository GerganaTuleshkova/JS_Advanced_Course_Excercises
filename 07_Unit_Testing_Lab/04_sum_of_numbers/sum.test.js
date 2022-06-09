const { assert, expect } = require('chai');
const { sum } = require('./sum');

describe('Test Sum of Numbers function', () => {
    it('Works with array as a argument', () => {
        assert.equal(sum([1, 2, 3]), 6, 'works with valid array [1, 2, 3]');
    });
    it('does not work with argument not an array', () => {
        assert.isNaN(sum('Hello'), 'does not work with string as an argument');
    });
    it('does not work with array of strings', () => {
        expect(sum(['a', 'b', 'c'])).to.be.NaN;
        // assert.throws(sum(['a', 'b', 'c']), 'does not work with array of strings');
    });
    it('does not work with number as an argument ', () => {
        expect(() => {sum(6)}).to.throw(Error)
        // assert.throws(sum(6), 'does not work with number as an argument');
    });
    
})