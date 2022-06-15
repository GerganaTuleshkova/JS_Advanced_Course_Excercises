const { assert, expect } = require('chai');
const { StringBuilder } = require('./StringBuilder');

describe('Test StringBuilder Class', () => {
    let str = 'str';
    describe('instantianting tests', () => {
        it('creates valid instance with valid aray when valid string is passed', () => {

            let ns = new StringBuilder(str);
            // expect(ns._stringArray).to.eql(['s', 't', 'r']);
            expect(ns.toString()).to.equal(str);
        })

        it('creates valid instance with empty array when no argument is passed', () => {
            let ns = new StringBuilder();
            // expect(ns._stringArray).to.eql([]);
            expect(ns.toString()).to.equal('');

        });

        it('creates valid instance with empty array when empty string is passed', () => {
            let ns = new StringBuilder('');
            // expect(ns._stringArray).to.eql([]);
            expect(ns.toString()).to.equal('');

        });

        it('throws error when arguments passed is not a string  ', () => {
            expect(() => new StringBuilder(2)).to.throw('Argument must be a string');
        });
    })

    describe('append tests', () => {
        it('extends the array when valid string is passed', () => {
            let ns = new StringBuilder('str');
            ns.append('a');
            // expect(ns._stringArray).to.eql(['s', 't', 'r', 'a']);
            expect(ns.toString()).to.equal('stra');

        });

        it('does not change the array when empty string is passed', () => {
            let ns = new StringBuilder('str');
            ns.append('');
            // expect(ns._stringArray).to.eql(['s', 't', 'r']);
            expect(ns.toString()).to.equal(str);

        });

        it('throws error when no argument is passed', () => {
            let ns = new StringBuilder('str');
            expect(() => ns.append()).to.throw('Argument must be a string');
        });

        it('throws error when argument passed is not a string  ', () => {
            let ns = new StringBuilder('str');
            expect(() => ns.append(2)).to.throw('Argument must be a string');
        });
    });

    describe('prepend tests', () => {
        it('extends the array when valid string is passed', () => {
            let ns = new StringBuilder('str');
            ns.prepend('an');
            // expect(ns._stringArray).to.eql(['a', 'n', 's', 't', 'r']);
            expect(ns.toString()).to.equal('anstr');

        });

        it('does not change the array when empty string is passed', () => {
            let ns = new StringBuilder('str');
            ns.prepend('');
            // expect(ns._stringArray).to.eql(['s', 't', 'r']);
            expect(ns.toString()).to.equal('str');

        });

        it('throws error when no argument is passed', () => {
            let ns = new StringBuilder('str');
            expect(() => ns.prepend()).to.throw('Argument must be a string');
        });

        it('throws error when argument passed is not a string  ', () => {
            let ns = new StringBuilder('str');
            expect(() => ns.prepend(2)).to.throw('Argument must be a string');
        });
    });

    describe('insretAt tests', () => {
        it('inserts in the array when valid string and index (0) are passed', () => {
            let ns = new StringBuilder('str');
            ns.insertAt('an', 0);
            // expect(ns._stringArray).to.eql(['a', 'n', 's', 't', 'r']);
            expect(ns.toString()).to.equal('anstr');

        });

        it('inserts in the array when valid string and index (1) are passed', () => {
            let ns = new StringBuilder('str');
            ns.insertAt('an', 1);
            // expect(ns._stringArray).to.eql(['s', 'a', 'n', 't', 'r']);
            expect(ns.toString()).to.equal('santr');
        });

        it('inserts in the array when valid string and index (3) are passed', () => {
            let ns = new StringBuilder('str');
            ns.insertAt('an', 3);
            // expect(ns._stringArray).to.eql(['s', 't', 'r', 'a', 'n']);
            expect(ns.toString()).to.equal('stran');

        });

        it('inserts in the array when valid string and index more than lenght (4) are passed', () => {
            let ns = new StringBuilder('str');
            ns.insertAt('an', 4);
            // expect(ns._stringArray).to.eql(['s', 't', 'r', 'a', 'n']);
            expect(ns.toString()).to.equal('stran');

        });

        it('inserts in the array when valid string and negative index(-1) are passed', () => {
            let ns = new StringBuilder('str');
            ns.insertAt('an', -1);
            // expect(ns._stringArray).to.eql(['s', 't', 'a', 'n', 'r',]);
            expect(ns.toString()).to.equal('stanr');

        });

        it('inserts in the array in the start when valid string and index as string are passed', () => {
            let ns = new StringBuilder('str');
            ns.insertAt('an', 'a');
            // expect(ns._stringArray).to.eql(['a', 'n', 's', 't', 'r',]);
            expect(ns.toString()).to.equal('anstr');

        });

        it('inserts in the array in the start when valid string and no index are passed', () => {
            let ns = new StringBuilder('str');
            ns.insertAt('an');
            // expect(ns._stringArray).to.eql(['a', 'n', 's', 't', 'r',]);
            expect(ns.toString()).to.equal('anstr');

        });

        it('does not change the array when empty string and valid index are passed', () => {
            let ns = new StringBuilder('str');
            ns.insertAt('', 2);
            // expect(ns._stringArray).to.eql(['s', 't', 'r',]);
            expect(ns.toString()).to.equal('str');

        });

        it('throws error when no argument is passed', () => {
            let ns = new StringBuilder('str');
            expect(() => ns.insertAt()).to.throw('Argument must be a string');
        });

        it('throws error when non string is passed', () => {
            let ns = new StringBuilder('str');
            expect(() => ns.insertAt(2, 2)).to.throw('Argument must be a string');
        });
    });

    describe('remove tests', () => {
        it('removes the correct section from the array when valid index (0) and len (2) are passed', () => {
            let ns = new StringBuilder('str');
            ns.remove(0, 2);
            // expect(ns._stringArray).to.eql(['r']);
            expect(ns.toString()).to.equal('r');

        });

        it('removes the correct section from the array when valid index (1) and len (2) are passed', () => {
            let ns = new StringBuilder('str');
            ns.remove(1, 2);
            // expect(ns._stringArray).to.eql(['s']);
            expect(ns.toString()).to.equal('s');

        });

        it('removes nothing from the array when index is higher than lenght (4) and len (2) are passed', () => {
            let ns = new StringBuilder('str');
            ns.remove(4, 2);
            // expect(ns._stringArray).to.eql(['s', 't', 'r',]);
            expect(ns.toString()).to.equal('str');

        });

        it('removes nothing from the array when index is negative (4) and len (2) are passed', () => {
            let ns = new StringBuilder('str');
            ns.remove(4, 2);
            // expect(ns._stringArray).to.eql(['s', 't', 'r',]);
            expect(ns.toString()).to.equal('str');

        });

        it('removes a smaller section from the array when valid index (0) and len longer than length (5) are passed', () => {
            let ns = new StringBuilder('str');
            ns.remove(0, 5);
            // expect(ns._stringArray).to.eql([]);
            expect(ns.toString()).to.equal('');

        });

        it('removes a smaller section from the array when valid index (1) and len longer than length (5) are passed', () => {
            let ns = new StringBuilder('str');
            ns.remove(1, 5);
            // expect(ns._stringArray).to.eql(['s']);
            expect(ns.toString()).to.equal('s');

        });

        it('removes nothing from the array when valid index (1) and negative len (-2) are passed', () => {
            let ns = new StringBuilder('str');
            ns.remove(1, -2);
            // expect(ns._stringArray).to.eql(['s', 't', 'r',]);
            expect(ns.toString()).to.equal('str');

        });

        it('removes nothing from the array when valid index (1) and string len (a) are passed', () => {
            let ns = new StringBuilder('str');
            ns.remove(1, 'a');
            // expect(ns._stringArray).to.eql(['s', 't', 'r',]);
            expect(ns.toString()).to.equal('str');

        });
    });

    describe('toSring tests', () => {
        it('returns correct result', () => {
            let ns = new StringBuilder('str');
            expect(ns.toString()).to.equal('str');
        });
    });
});