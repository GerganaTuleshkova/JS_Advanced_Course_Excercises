const { assert } = require('chai');
const { isSymmetric } = require('./symmetry');

describe('Test isSymmetric function', () => {
    it('works with array', () => {
        assert.isTrue(isSymmetric([1, 2, 2, 1]), 'works with symetric array');
    });
    it('works with array that is not symmetric', () => {
        assert.isFalse(isSymmetric([1, 2, 3, 4]), 'works with asymtric array')
    });
    it('does not works with argument that is string', () => {
        assert.isFalse(isSymmetric('Hello'), 'works with string as a parmeter');
    });
    it('does not works with number', () => {
        assert.isFalse(isSymmetric(1), 'works with number as a parmeter');

    });
    it('does not works with boolean argument ', () => {
        assert.isFalse(isSymmetric(true), 'works with boolean as a parmeter');
    });
    it('works with array that is not symmetric', () => {
        assert.isFalse(isSymmetric([1, 2, '2', '1']), 'works with asymtric array');

    })
})