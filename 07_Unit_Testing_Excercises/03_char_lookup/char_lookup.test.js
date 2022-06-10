const { assert, expect } = require('chai');
const { lookupChar } = require('./char_lookup');


describe('Test lookupChar Function', () => {

    it('returns correct character with valid string and valid number as arguments', () => {
        assert.equal(lookupChar('even', 2), 'e');
        expect(lookupChar('even', 0)).to.equal('e');
        expect(lookupChar('even', 3)).to.equal('n');
    });

    it('returns undefined with valid string and invalid number as arguments', () => {
        assert.equal(lookupChar('even', '2'), undefined);
    });

    it('returns undefined with invalid string and valid number as arguments', () => {
        assert.equal(lookupChar(8, 2), undefined);
    });

    it('returns "Incorrect index" message with valid string and number higher than strng len', () => {
        assert.equal(lookupChar('string', 6), 'Incorrect index');
    });

    it('returns "Incorrect index" message with empty string', () => {
        assert.equal(lookupChar('', 0), 'Incorrect index');
    });

    it('returns "Incorrect index" message with valid string and number below 0', () => {
        assert.equal(lookupChar('string', -1), 'Incorrect index');
    });

    it('returns undefined with valid string and floating number as arguments', () => {
        assert.equal(lookupChar('string', 2.2), undefined);
        expect(lookupChar('string', 2.2)).to.equal(undefined);
    });
});