const { expect } = require('chai');
const { ChristmasMovies } = require('./ChristmasMovies');

describe('Test ChristmasMovies class', () => {
    it('creates object with correct properties', () => {
        let cm = new ChristmasMovies();
        expect(typeof cm).to.equal('object');
        expect(cm.movieCollection).to.eql([]);
        expect(typeof cm.watched).to.equal('object');
        expect(cm.actors).to.eql([]);
    })

    describe('buyMovie() tests', () => {
        it('returns proper message with movie not on list', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
            let uniqueActors = new Set(actors);
            let output = [];
            [...uniqueActors].map(actor => output.push(actor))
            let expectedResult = `You just got ${movieName} to your collection in which ${output.join(', ')} are taking part!`

            expect(cm.buyMovie(movieName, actors)).to.equal(expectedResult);
        });

        it('returns proper message with movie not on list and a dublicated actor', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern', 'Daniel Stern'];
            let uniqueActors = new Set(actors);
            let output = [];
            [...uniqueActors].map(actor => output.push(actor))
            let expectedResult = `You just got ${movieName} to your collection in which ${output.join(', ')} are taking part!`

            expect(cm.buyMovie(movieName, actors)).to.equal(expectedResult);
        });

        it('throws error with movie on list', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern', 'Daniel Stern'];
            cm.buyMovie(movieName, actors)

            let expectedResult = `You already own ${movieName} in your collection!`

            expect(() => cm.buyMovie(movieName, actors)).to.throw(expectedResult);
        });
    });

    describe('discardMovie() tests', () => {
        it('returns proper message with movie on list and watched', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
            cm.buyMovie(movieName, actors)
            cm.watchMovie(movieName)
            let expectedResult = `You just threw away ${movieName}!`

            expect(cm.discardMovie(movieName)).to.equal(expectedResult);
        });

        it('trows error with movie on list and but not watched', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
            cm.buyMovie(movieName, actors);

            let expectedResult = `${movieName} is not watched!`;

            expect(() => cm.discardMovie(movieName)).to.throw(expectedResult);
        });

        it('trows error with movie not on list', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';

            let expectedResult = `${movieName} is not at your collection!`;

            expect(() => cm.discardMovie(movieName)).to.throw(expectedResult);
        });
    });

    describe('watchMovie() tests', () => {
        it('adds the movie to watched property', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
            cm.buyMovie(movieName, actors)
            cm.watchMovie(movieName)
            let expectedResult = { [movieName]: 1 }

            expect(cm.watched).to.eql(expectedResult);
        });

        it('increases watch count if the movie was watched', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
            cm.buyMovie(movieName, actors)
            cm.watchMovie(movieName)
            cm.watchMovie(movieName)
            let expectedResult = { [movieName]: 2 }

            expect(cm.watched).to.eql(expectedResult);
        });

        it('trows error if movie not on list', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';

            let expectedResult = 'No such movie in your collection!'

            expect(() => cm.watchMovie(movieName)).to.throw(expectedResult);
        });
    });

    describe('favouriteMovie() tests', () => {
        it('returns correct message with watched movies', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];

            let movieName2 = 'Home Alone 2';
            // let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
            cm.buyMovie(movieName, actors)
            cm.buyMovie(movieName2, actors)
            cm.watchMovie(movieName)
            cm.watchMovie(movieName)

            cm.watchMovie(movieName2)
            cm.watchMovie(movieName2)
            cm.watchMovie(movieName2)


            let expectedResult = `Your favourite movie is ${movieName2} and you have watched it 3 times!`

            expect(cm.favouriteMovie()).to.equal(expectedResult);
        });

        it('throws error with no watched movies', () => {
            let cm = new ChristmasMovies();
            let expectedResult = 'You have not watched a movie yet this year!'

            expect(() => cm.favouriteMovie()).to.throw(expectedResult);
        });
    });

    describe('mostStarredActors() tests', () => {
        it('returns correct output with movies on list', () => {
            let cm = new ChristmasMovies();
            let movieName = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
            let actors2 = ['Macaulay Culkin'];
            let movieName2 = 'Home Alone 2';
            cm.buyMovie(movieName, actors)
            cm.buyMovie(movieName2, actors2)
            
            let expectedResult = `The most starred actor is Macaulay Culkin and starred in 2 movies!`

            expect(cm.mostStarredActor()).to.equal(expectedResult);
        });

        it('throws error with no movies on list', () => {
            let cm = new ChristmasMovies();
                        
            let expectedResult = 'You have not watched a movie yet this year!'

            expect(() => cm.mostStarredActor()).to.throw(expectedResult);
        });
    });
});