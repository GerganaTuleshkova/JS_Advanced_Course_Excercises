class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        let existingParticipant = this.listOfParticipants.find(p => p.name == name);
        if (existingParticipant != undefined) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0,
        }

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let existingParticipant = this.listOfParticipants.find(p => p.name == name);
        if (existingParticipant == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        const index = this.listOfParticipants.indexOf(existingParticipant);
        if (index !== -1) {
            this.listOfParticipants.splice(index, 1);
        }
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(p => p.name == participant1);
        let player2 = this.listOfParticipants.find(p => p.name == participant2);
        if (player1 == undefined
            || (typeOfGame == 'WaterBalloonFights' && player2 == undefined)) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == 'Battleship') {
            player1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }

        if (typeOfGame == 'WaterBalloonFights' && player1.condition != player2.condition) {
            throw new Error(`Choose players with equal condition.`);
        }

        let winer;

        if (player1.power == player2.power) {
            return `There is no winner.`;
        } else if (player1.power > player2.power) {
            winer = player1;
        } else if (player1.power < player2.power) {
            winer = player2;
        }

        winer.wins += 1;
        return `The ${winer.name} is winner in the game ${typeOfGame}.`;
    }

    toString () {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        let sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let p of sortedParticipants) {
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        }
        return result.join('\n');
    }
}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
