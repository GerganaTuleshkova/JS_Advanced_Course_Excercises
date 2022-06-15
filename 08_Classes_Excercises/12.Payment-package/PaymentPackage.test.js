const { assert, expect } = require('chai');
const { PaymentPackage } = require('./PaymentPackage');

describe('Test PaymentPackage class', () => {
    // instantiation
    it('creates correct name with correct input', () => {
        let pP = new PaymentPackage('Correct name', 55);
        expect(pP.name).to.equal('Correct name');
    });

    it('creates correct value with correct input', () => {
        let pP = new PaymentPackage('Correct name', 55);
        expect(pP.value).to.equal(55);
    })

    it('creates correct VAT with correct input', () => {
        let pP = new PaymentPackage('Correct name', 55);
        expect(pP.VAT).to.equal(20);
    });

    it('creates correct active status with correct input', () => {
        let pP = new PaymentPackage('Correct name', 55);
        expect(pP.active).to.equal(true);
    });

    
    it('throws error with no input', () => {
        // assert.throw(() => { let pP = new PaymentPackage() }, Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage()).to.throw('Name must be a non-empty string');
    });

    //name

    it('changes name with correct input', () => {
        let pP = new PaymentPackage('Correct name', 55);
        pP.name = 'New name';
        expect(pP.name).to.equal('New name');
    });

    it('throws error with name as empty string', () => {
        // assert.throw(() => { let pP = new PaymentPackage('', 55) }, Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage('', 55)).to.throw('Name must be a non-empty string');
    });


    it('throws error with name not string', () => {
        // assert.throw(() => { let pP = new PaymentPackage(55, 55) }, Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage(55, 55)).to.throw('Name must be a non-empty string');
    });

    it('throws error when changing name to empty string', () => {
        let pP = new PaymentPackage('Correct name', 55);
        // assert.throw(() => { pP.name = '' }, Error, 'Name must be a non-empty string');
        expect(() => pP.name = '').to.throw('Name must be a non-empty string');
    });

    //value

    it('changes value with correct input', () => {
        let pP = new PaymentPackage('Correct name', 55);
        pP.value = 10;
        expect(pP.value).to.equal(10);
    });

    it('changes value with 0', () => {
        let pP = new PaymentPackage('Correct name', 55);
        pP.value = 0;
        expect(pP.value).to.equal(0);
    });

    it('throws error with value not a number', () => {
        // assert.throw(() => { let pP = new PaymentPackage('Correct name', 'Correct name') }, Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage('Correct name', 'Incorrect value')).to.throw('Value must be a non-negative number');
    });

    it('throws error with value not provided', () => {
        // assert.throw(() => { let pP = new PaymentPackage('Correct name') }, Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage('Correct name')).to.throw('Value must be a non-negative number');
    });

    it('throws error with value negative number', () => {
        // assert.throw(() => { let pP = new PaymentPackage('Correct name', -1) }, Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage('Correct name', -1)).to.throw('Value must be a non-negative number');
    });

    it('throws error when changing value to negative number', () => {
        let pP = new PaymentPackage('Correct name', 55);
        expect(() => pP.value = -1).to.throw('Value must be a non-negative number');
    });

    //VAT

    it('changes VAT when valid input provided', () => {
        let pP = new PaymentPackage('Correct name', 55);
        pP.VAT = 30;
        expect(pP.VAT).to.equal(30);
    });

    it('throws error when setting VAT to string', () => {
        let pP = new PaymentPackage('Correct name', 55);
        assert.throw(() => pP.VAT = 'string', Error);
    });

    it('throws error when setting VAT to negative number', () => {
        let pP = new PaymentPackage('Correct name', 55);
        // assert.throw(() => { pP.VAT = -1 }, Error, 'VAT must be a non-negative number');
        expect(() => pP.VAT = -1).to.throw('VAT must be a non-negative number');
    });

    //active

    it('changes active when valid boolean provided', () => {
        let pP = new PaymentPackage('Correct name', 55);
        pP.active = false;
        expect(pP.active).to.equal(false);
    });

    it('throws error when setting active to not boolean', () => {
        let pP = new PaymentPackage('Correct name', 55);
        // assert.throw(() => { pP.active = 'string' }, Error, 'Active status must be a boolean');
        expect(() => pP.active = 'string').to.throw('Active status must be a boolean');
    });

    it('throws error when setting active to null', () => {
        let pP = new PaymentPackage('Correct name', 55);
        // assert.throw(() => { pP.active = null }, Error, 'Active status must be a boolean');
        expect(() => pP.active = null).to.throw('Active status must be a boolean');
    });


    it('returns correct string when toString called', () => {
        let pP = new PaymentPackage('Correct name', 55);
        expect(pP.toString()).to.equal(`Package: Correct name\n- Value (excl. VAT): 55\n- Value (VAT 20%): 66`);
    });

    // toString()

    it('returns correct string when toString called', () => {
        let pP = new PaymentPackage('Correct name', 55);
        pP.VAT = 30;
        pP.active = false;
        expect(pP.toString()).to.equal(`Package: Correct name (inactive)\n- Value (excl. VAT): 55\n- Value (VAT 30%): 71.5`);
    });
})