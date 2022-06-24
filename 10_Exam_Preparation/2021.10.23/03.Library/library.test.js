const { expect } = require('chai');
const { library } = require('./library')



describe('Test library object', () => {
    describe('creates object tests', () => {
        it('creates object', () => {
            expect(typeof library).to.equal('object');
        });
    });

    describe('calcPriceOfBook() tests', () => {
        it('returns correct result with valid input and year < 1980', () => {
            let nameOfBook = 'War and Peace';
            let year = 1867;
            let price = 20;
            price *= 0.5;
            let expectedResult = `Price of ${nameOfBook} is ${price.toFixed(2)}`;
            expect(library.calcPriceOfBook(nameOfBook, year)).to.equal(expectedResult);
        });

        it('returns correct result with valid input and year = 1980', () => {
            let nameOfBook = 'War and Peace';
            let year = 1980;
            let price = 20;
            price *= 0.5;
            let expectedResult = `Price of ${nameOfBook} is ${price.toFixed(2)}`;
            expect(library.calcPriceOfBook(nameOfBook, year)).to.equal(expectedResult);
        });

        it('returns correct result with valid input and year > 1980', () => {
            let nameOfBook = 'War and Peace';
            let year = 1981;
            let price = 20;
            let expectedResult = `Price of ${nameOfBook} is ${price.toFixed(2)}`;
            expect(library.calcPriceOfBook(nameOfBook, year)).to.equal(expectedResult);
        });

        it('throws error with name not a string', () => {
            let nameOfBook = 2;
            let year = 1981;
            let expectedResult = `Invalid input`;
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw(expectedResult);
            expect(() => library.calcPriceOfBook(undefined, year)).to.throw(expectedResult);
        });

        it('throws error with year not an integer', () => {
            let nameOfBook = 'War and Peace';
            let year = '1980';
            let expectedResult = `Invalid input`;
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw(expectedResult);
            expect(() => library.calcPriceOfBook(nameOfBook, undefined)).to.throw(expectedResult);
            expect(() => library.calcPriceOfBook(nameOfBook, 9.9)).to.throw(expectedResult);
        });
    });

    describe('findBook() tests', () => {
        it('returns correct result with valid input and book in the library', () => {
            let booksArr = ["Troy", "Life Style", "Torronto"];
            let desiredBook = 'Troy';
            let expectedResult = `We found the book you want.`;
            expect(library.findBook(booksArr, desiredBook)).to.equal(expectedResult);
            expect(library.findBook(booksArr, "Life Style")).to.equal(expectedResult);
            expect(library.findBook(booksArr, "Torronto")).to.equal(expectedResult);
        });

        it('returns correct result with valid input and book not in the library', () => {
            let booksArr = ["Troy", "Life Style", "Torronto"];
            let desiredBook = 'War and Peace';
            let expectedResult = `The book you are looking for is not here!`;
            expect(library.findBook(booksArr, desiredBook)).to.equal(expectedResult);
        });

        it('throes error with empty array', () => {
            let booksArr = [];
            let desiredBook = 'War and Peace';
            let expectedResult = `No books currently available`;
            expect(() => library.findBook(booksArr, desiredBook)).to.throw(expectedResult);
        });
    });

    describe('arrangeTheBooks() tests', () => {
        it('returns correct result with books count <= space', () => {
            let countBooks = 39;
            let expectedResult = 'Great job, the books are arranged.';
            expect(library.arrangeTheBooks(countBooks)).to.equal(expectedResult);
            expect(library.arrangeTheBooks(40)).to.equal(expectedResult);
        });

        it('returns correct result with books count > space', () => {
            let countBooks = 41;
            let expectedResult = 'Insufficient space, more shelves need to be purchased.';
            expect(library.arrangeTheBooks(countBooks)).to.equal(expectedResult);
        });

        it('throw error with invalid book count', () => {
            let expectedResult = 'Invalid input';
            expect(() => library.arrangeTheBooks(-1)).to.throw(expectedResult);
            expect(() => library.arrangeTheBooks("a")).to.throw(expectedResult);
            expect(() => library.arrangeTheBooks(2.5)).to.throw(expectedResult);
        });
    });
});

