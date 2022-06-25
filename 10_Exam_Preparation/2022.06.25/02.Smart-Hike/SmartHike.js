class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let resourcesToBeLeft = this.resources - time * 10;

        if (resourcesToBeLeft < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources = resourcesToBeLeft;
        this.listOfHikes.push({peak, time, difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        this.resources += time * 10;

        if (this.resources > 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria == 'hard' || criteria == 'easy') {
            let matchingHikes = this.listOfHikes.filter(h => h.difficultyLevel == criteria);
            if (matchingHikes.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            matchingHikes.sort((a, b) => a.time - b.time);
            let bestHike = matchingHikes[0]
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }

        let result = [];
        result.push('All hiking records:');
        for (let hike of this.listOfHikes) {
            result.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
        }

        return result.join('\n');
    }
}


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Two', 1706));
console.log(user.addGoal('Hrd2', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(4));
console.log(user.rest(4));
console.log(user.rest(4));

console.log(user.hike('Rui', 3, 'easy'));
console.log(user.rest(4));

console.log(user.hike('Two', 2, 'easy'));
console.log(user.rest(4));

console.log(user.hike('Hrd2', 3, 'hard'));
console.log(user.rest(4));

console.log('---------------');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');

console.log('---------------');

console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
