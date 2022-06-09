const { assert, expect } = require('chai');
const {rgbToHexColor} = require('./rgb_to_hex');

describe('Test rgbToHexColor Function', () => {
    it('returns correct color with valid numbers [0, 0, 0]',  () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000')
    });
    it('returns correct color with valid numbers [255, 255, 255]',  () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF', 'number 255, 255, 255')
    });
    it('returns correct color with valid numbers [100, 100, 100]',  () => {
        assert.equal(rgbToHexColor(100, 100, 100), '#646464')
    });
    it('returns undefined with two arguments',  () => {
        assert.equal(rgbToHexColor(100, 100), undefined)
    });
    it('returns undefined with one arguments',  () => {
        assert.equal(rgbToHexColor(100), undefined)
    });
    it('returns undefined with no arguments',  () => {
        assert.equal(rgbToHexColor(), undefined)
    });
    it('returns undefined with argument above range',  () => {
        assert.equal(rgbToHexColor(0, 0, 256), undefined);
        assert.equal(rgbToHexColor(0, 256, 0), undefined);
        assert.equal(rgbToHexColor(256, 0, 0), undefined);
    });
    it('returns undefined with argument below range',  () => {
        assert.equal(rgbToHexColor(0, 0, -1), undefined);
        assert.equal(rgbToHexColor(0, -1, 0), undefined);
        assert.equal(rgbToHexColor(-1, 0, 0), undefined);
    });

    it('returns undefined with argument not numbers',  () => {
        assert.equal(rgbToHexColor(0, 0, 'a'), undefined);
        assert.equal(rgbToHexColor(0, 'a', 0), undefined);
        assert.equal(rgbToHexColor('a', 0, 0), undefined);
    });

    it('returns undefined with floats',  () => {
        assert.equal(rgbToHexColor(1.5, 1.5, 1.5), undefined)
    });
})

