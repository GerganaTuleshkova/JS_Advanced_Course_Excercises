function cardFactory(faceGiven, suitGiven) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660 ',
        H: '\u2665 ',
        D: '\u2666 ',
        C: '\u2663 ',
    }

    if (!faces.includes(faceGiven) || (!suits[suitGiven])) {
        throw new Error('Invalid face or suit!');
    }

    let card = {
        face: faceGiven,
        suit: suits[suitGiven],
        toString() {
            return `${this.face}${this.suit}`
        },
    }
    return card;
}

// module.exports = cardFactory;

console.log(cardFactory('1', 'C').toString());