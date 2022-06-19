const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('Test companyAdministration object', () => {
    it('creates valid object', () => {
        expect(typeof companyAdministration).to.be.equal('object');
    });

    describe('hiringEmployee tests', () => {
        it('returns correct string with valid name, position and years', () => {
            let name = 'George';
            let position = 'Programmer';
            let years = 10;
            expect(companyAdministration.hiringEmployee(name, position, years)).to.equal(`${name} was successfully hired for the position ${position}.`);
        });
        it('returns correct string with valid name, position and years=3', () => {
            let name = 'George';
            let position = 'Programmer';
            let years = 3;
            expect(companyAdministration.hiringEmployee(name, position, years)).to.equal(`${name} was successfully hired for the position ${position}.`);
        });

        it('returns correct string with valid name, position and years=2', () => {
            let name = 'George';
            let position = 'Programmer';
            let years = 2;
            expect(companyAdministration.hiringEmployee(name, position, years)).to.equal(`${name} is not approved for this position.`);
            expect(companyAdministration.hiringEmployee(name, position, 1)).to.equal(`${name} is not approved for this position.`);
        });

        it('trows error with valid name, position !=Programmer and valid years', () => {
            let name = 'George';
            let position = 'QA';
            let years = 10;
            expect(() => { companyAdministration.hiringEmployee(name, position, years) }).to.throw(`We are not looking for workers for this position.`);
        });
    });

    describe('calculateSalary tests', () => {
        it('returns correct amount with hours=2', () => {
            let hours = 2;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            expect(companyAdministration.calculateSalary(hours)).to.equal(totalAmount);
        });


        it('returns correct amount with hours=0', () => {
            let hours = 0;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            expect(companyAdministration.calculateSalary(hours)).to.equal(totalAmount);
        });

        it('returns correct amount with hours=161', () => {
            let hours = 161;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            totalAmount += 1000;
            expect(companyAdministration.calculateSalary(hours)).to.equal(totalAmount);
        });

        it('returns correct amount with hours=160', () => {
            let hours = 160;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            // totalAmount += 1000;
            expect(companyAdministration.calculateSalary(hours)).to.equal(totalAmount);
        });

        it('throws error with hours a string', () => {
            let hours = '160';
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            // totalAmount += 1000;
            expect(() => { companyAdministration.calculateSalary(hours) }).to.throw('Invalid hours');
        });

        it('throws error with negative hours', () => {
            let hours = -1;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            expect(() => { companyAdministration.calculateSalary(hours) }).to.throw('Invalid hours');
        });

        it('throws error with negative hours', () => {
            let hours = -1;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            expect(() => { companyAdministration.calculateSalary(hours) }).to.throw('Invalid hours');
        });

        it('throws error with no hours', () => {
            let hours = -1;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            expect(() => { companyAdministration.calculateSalary() }).to.throw('Invalid hours');
        });
    });


    describe('firedEmployee tests', () => {
        it('returns valid array with valid input', () => {
            let employees = ['Petar', 'Ivan', 'George'];
            let index = 1;
            let result = [];
           
            for (let i = 0; i < employees.length; i++) {
                if (i !== index) {
                    result.push(employees[i]);
                }
            }

            expect(companyAdministration.firedEmployee(employees, index)).to.equal(result.join(", "));
        });

        it('returns valid array with valid input', () => {
            let employees = ['Petar', 'Ivan', 'George'];
            let index = 0;
            let result = [];
           
            for (let i = 0; i < employees.length; i++) {
                if (i !== index) {
                    result.push(employees[i]);
                }
            }

            expect(companyAdministration.firedEmployee(employees, index)).to.equal(result.join(", "));
        });

        it('returns valid array with valid input', () => {
            let employees = ['Petar', 'Ivan', 'George'];
            let index = 2;
            let result = [];
           
            for (let i = 0; i < employees.length; i++) {
                if (i !== index) {
                    result.push(employees[i]);
                }
            }

            expect(companyAdministration.firedEmployee(employees, index)).to.equal(result.join(", "));
        });

        it('throws error with employees not an array', () => {
            let employees = '[]';
            let index = 1;
            let result = [];
           
            for (let i = 0; i < employees.length; i++) {
                if (i !== index) {
                    result.push(employees[i]);
                }
            }

            expect(() => {companyAdministration.firedEmployee(employees, index)}).to.throw('Invalid input');
        });

        it('throws error with index above employees length', () => {
            let employees = ['Petar', 'Ivan', 'George'];
            let index = 3;
            let result = [];
           
            for (let i = 0; i < employees.length; i++) {
                if (i !== index) {
                    result.push(employees[i]);
                }
            }

            expect(() => {companyAdministration.firedEmployee(employees, index)}).to.throw('Invalid input');
        });

        it('throws error with index as string', () => {
            let employees = ['Petar', 'Ivan', 'George'];
            let index = '1';
            let result = [];
           
            for (let i = 0; i < employees.length; i++) {
                if (i !== index) {
                    result.push(employees[i]);
                }
            }

            expect(() => {companyAdministration.firedEmployee(employees, index)}).to.throw('Invalid input');
        });

        it('throws error with negative index', () => {
            let employees = ['Petar', 'Ivan', 'George'];
            let index = -1;
            let result = [];
           
            for (let i = 0; i < employees.length; i++) {
                if (i !== index) {
                    result.push(employees[i]);
                }
            }

            expect(() => {companyAdministration.firedEmployee(employees, index)}).to.throw('Invalid input');
        });
    });
})