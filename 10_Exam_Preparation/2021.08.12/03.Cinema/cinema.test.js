const { expect } = require('chai');
const { cinema } = require('./cinema')

describe('Test cinema object', () => {
    const schedule = {
        "Premiere": 12.00,
        "Normal": 7.50,
        "Discount": 5.50
    }
    describe('creation of object', () => {
        it('creates object', () => {
            expect(typeof cinema).to.equal('object');
        });
    });

    describe('showMovie() tests', () => {
        it('returns correct string with array len = 3', () => {
            let movieArr = ['King Kong', 'The Tomorrow War', 'Joker'];
            let expectedResult = movieArr.join(', ');
            expect(cinema.showMovies(movieArr)).to.equal(expectedResult);
        });

        it('returns correct string with array len = 1', () => {
            let movieArr = ['King Kong'];
            let expectedResult = movieArr.join(', ');
            expect(cinema.showMovies(movieArr)).to.equal(expectedResult);
        });

        it('returns correct string with array len = 0', () => {
            let movieArr = [];
            let expectedResult = 'There are currently no movies to show.';
            expect(cinema.showMovies(movieArr)).to.equal(expectedResult);
        });
    });

    describe('ticketPrice() tests', () => {
        it('returns correct price with projectionType on the list', () => {
            let projectionType = 'Premiere';
            let expectedResult = schedule[projectionType];
            expect(cinema.ticketPrice(projectionType)).to.equal(expectedResult);
        });

        it('returns correct price with projectionType on the list', () => {
            let projectionType = 'Normal';
            let expectedResult = schedule[projectionType];
            expect(cinema.ticketPrice(projectionType)).to.equal(expectedResult);
        });
        it('returns correct price with projectionType on the list', () => {
            let projectionType = 'Discount';
            let expectedResult = schedule[projectionType];
            expect(cinema.ticketPrice(projectionType)).to.equal(expectedResult);
        });
        it('throws error with projectionType not on the list', () => {
            let projectionType = 'Kids';
            let expectedResult =  'Invalid projection type.';
            expect(() => cinema.ticketPrice(projectionType)).to.throw(expectedResult);
        });
    });

    describe('swapSeatsInHall() tests', () => {
        it('returns correct string with valid numbers 1 & 2', () => {
            let firstPlace = 1;
            let secondPlace = 2;
            let expectedResult = 'Successful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(expectedResult);
        });

        it('returns correct string with valid numbers 1 & 20', () => {
            let firstPlace = 1;
            let secondPlace = 20;
            let expectedResult = 'Successful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(expectedResult);
        });

        it('returns correct string with valid numbers 20 & 1', () => {
            let firstPlace = 20;
            let secondPlace = 1;
            let expectedResult = 'Successful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(expectedResult);
        });

        it('returns correct string with invalid input', () => {
            let firstPlace = 20;
            let secondPlace = 20;
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(1, 1)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(0, 1)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(1, 0)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(1, 21)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(21, 20)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall("a", 20)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(1, 'a')).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(1.5, 20)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(1.5, 2.5)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall(1)).to.equal(expectedResult);
            expect(cinema.swapSeatsInHall()).to.equal(expectedResult);
        });
    });
});
