const { assert, expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('Test bookSelection object', () => {
    it('creates object', () => {
        expect(typeof bookSelection).to.be.equal('object');
    });

    describe('isGenreSuitable test', () => {
        it('return "suitable..." string with age=13', () => {
            expect(bookSelection.isGenreSuitable('drama', 13)).to.equal('Those books are suitable');
        });
        it('returns "suitable..." string with age=13 and genre=Triller', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
        });
        it('returns "suitable..." string with age=13 and genre=Horror', () => {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
        });
        it('returns "suitable..." string with age=13 and genre=drama', () => {
            expect(bookSelection.isGenreSuitable('drama', 13)).to.equal('Those books are suitable');
        });
        it('returns "suitable..." string with age=12 and genre=Comedy', () => {
            expect(bookSelection.isGenreSuitable('Comedy', 12)).to.equal('Those books are suitable');
        });
        it('returns "not suitable..." string with age=12 and genre=Horror', () => {
            let age = 12;
            let genre = 'Horror'
            expect(bookSelection.isGenreSuitable(genre, age)).to.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`);
        });
        it('returns "not suitable..." string with age=12 and genre=Thriller', () => {
            let age = 12;
            let genre = 'Thriller'
            expect(bookSelection.isGenreSuitable(genre, age)).to.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`);
        });
        it('returns "suitable..." string with age=11 and genre=Comedy', () => {
            expect(bookSelection.isGenreSuitable('Comedy', 11)).to.equal('Those books are suitable');
        });
        it('returns "not suitable..." string with age=11 and genre=Horror', () => {
            let age = 11;
            let genre = 'Horror'
            expect(bookSelection.isGenreSuitable(genre, age)).to.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`);
        });
        it('returns "not suitable..." string with age=11 and genre=Thriller', () => {
            let age = 11;
            let genre = 'Thriller'
            expect(bookSelection.isGenreSuitable(genre, age)).to.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`);
        });
    });

    describe('isItAffordable test', () => {
        it('returns "enough" string with price=1, budget=2', () => {
            let price = 1;
            let budget = 2
            expect(bookSelection.isItAffordable(price, budget)).to.equal(`Book bought. You have ${budget - price}$ left`);
        });
        it('returns "enough" string with price=1, budget=1', () => {
            let price = 1;
            let budget = 1
            expect(bookSelection.isItAffordable(price, budget)).to.equal(`Book bought. You have ${budget - price}$ left`);
        });
        it('returns "not enough" string with price=2, budget=1', () => {
            let price = 2;
            let budget = 1;
            expect(bookSelection.isItAffordable(price, budget)).to.equal("You don't have enough money");
        });
        it('trows error with price not a number', () => {
            let price = '2';
            let budget = 1;
            expect(() => { bookSelection.isItAffordable(price, budget) }).to.throw('Invalid input');
        });

        it('trows error with budget not a number', () => {
            let price = 2;
            let budget = '1';
            expect(() => { bookSelection.isItAffordable(price, budget) }).to.throw('Invalid input');
        });

        it('trows error with price and budget not numbers', () => {
            let price = '2';
            let budget = '1';
            expect(() => { bookSelection.isItAffordable(price, budget) }).to.throw('Invalid input');
        });

        it('trows error with price and budget not passed', () => {
            let price = '2';
            let budget = '1';
            expect(() => { bookSelection.isItAffordable() }).to.throw('Invalid input');
        });
        it('trows error with budget not passed', () => {
            let price = '2';
            let budget = '1';
            expect(() => { bookSelection.isItAffordable(price) }).to.throw('Invalid input');
        });
    })

    describe('suitableTitles test', () => {
        it('returns correct array with valid array and valid wantedGenre', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            let wantedGenre = 'Thriller';
            let expectedResult = ['The Da Vinci Code'];
            expect(bookSelection.suitableTitles(books, wantedGenre)).to.eql(expectedResult);
        });

        it('returns correct empty array with valid array and valid wantedGenre', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            let wantedGenre = 'Drama';
            let expectedResult = []
            expect(bookSelection.suitableTitles(books, wantedGenre)).to.eql(expectedResult);
        });

        it('returns correct array (2 elements) with valid array and valid wantedGenre', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Second", genre: "Thriller" }];
            let wantedGenre = 'Thriller';
            let expectedResult = [];
            books.map((obj) => {
                if (obj.genre === wantedGenre) {
                    expectedResult.push(obj.title);
                }
            });
            expect(bookSelection.suitableTitles(books, wantedGenre)).to.eql(expectedResult);
        });

        it('returns correct array (1 element) with valid array and valid wantedGenre', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Second", genre: "Drama" }];
            let wantedGenre = 'Thriller';
            let expectedResult = [];
            books.map((obj) => {
                if (obj.genre === wantedGenre) {
                    expectedResult.push(obj.title);
                }
            });
            expect(bookSelection.suitableTitles(books, wantedGenre)).to.eql(expectedResult);
        });

        it('trows error with books not an array', () => {
            let books = '{ title: "The Da Vinci Code", genre: "Thriller" } {} title: "Second", genre: "Drama" }]';
            let wantedGenre = 'Thriller';
            
            expect(() => { bookSelection.suitableTitles(books, wantedGenre) }).to.throw('Invalid input');
        });

        it('trows error with wantedGenre not a string', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Second", genre: "Drama" }];
            let wantedGenre = 2;
            expect(() => { bookSelection.suitableTitles(books, wantedGenre) }).to.throw('Invalid input');
        });

        it('trows error with no arguments', () => {
            expect(() => { bookSelection.suitableTitles() }).to.throw('Invalid input');
        });

        it('trows error with 1 argument', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Second", genre: "Drama" }];
            expect(() => { bookSelection.suitableTitles(books) }).to.throw('Invalid input');
        });
    })
})
