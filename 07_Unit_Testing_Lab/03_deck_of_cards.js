const cardFactory = require('./02_playing_cards');


function printDeck(arrOfStrings) {
    let cards = [];
    for (let cardAsString of arrOfStrings) {
        let face = cardAsString.slice(0, -1);
        let suit = cardAsString.slice(-1);
        try {
            let card = cardFactory(face, suit);
            cards.push(card);
        } catch (ex) {
            console.log(`Invalid card: ${cardAsString}` );
            return;
        }
    }

    console.log(cards.join(' '));

    // function cardFactory(faceGiven, suitGiven) {
    //     const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    //     const suits = {
    //         S: '\u2660 ',
    //         H: '\u2665 ',
    //         D: '\u2666 ',
    //         C: '\u2663 ',
    //     }
    
    //     if (!faces.includes(faceGiven) || (!suits[suitGiven])) {
    //         throw new Error('Invalid face or suit!');
    //     }
    
    //     let card = {
    //         face: faceGiven,
    //         suit: suits[suitGiven],
    //         toString() {
    //             return `${this.face}${this.suit}`
    //         },
    //     }
    //     return card;
    // }
}

printDeck(['AS', '10D', 'KH', '2C']);
// printDeck(['5S', '3D', 'QD', '1C']);