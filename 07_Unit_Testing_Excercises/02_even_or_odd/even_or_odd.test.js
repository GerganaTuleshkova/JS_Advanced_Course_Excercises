const {assert, expect} = require('chai');
const {isOddOrEven} = require('./even_or_odd');

describe('Test isOddOrEven Function', () => {

    it('returns correct result with valid even len string', () => {
        assert.equal(isOddOrEven('even'), 'even');
        expect(isOddOrEven('hi')).to.equal('even');
    });

    it('returns correct result with valid odd len string', () => {
        assert.equal(isOddOrEven('odd'), 'odd');
        expect(isOddOrEven('hello')).to.equal('odd');
    });

    it('returns undefined with argument not string', () => {
        assert.equal(isOddOrEven(5), undefined);
    });

    it('returns undefined with no argument', () => {
        assert.equal(isOddOrEven(), undefined);
    });

    it('returns correct result with valid even len two strings', () => {
        assert.equal(isOddOrEven('even even1'), 'even');
    });

    it('returns correct result with valid even len two strings', () => {
        isOddOrEven('odd');
        assert.equal(isOddOrEven('even'), 'even');
    });
});