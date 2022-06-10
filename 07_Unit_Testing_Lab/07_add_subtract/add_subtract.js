function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; },
    }
}

module.exports = {
    createCalculator
}

let calc = createCalculator()
console.log(typeof calc)
calc.add('2');
calc.subtract('-6');
console.log(calc.get())

