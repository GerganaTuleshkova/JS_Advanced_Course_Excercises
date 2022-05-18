function calculateFruitCost(fruit, weightInGr, pricePerKg) {
    let weightInKg = weightInGr/ 1000
    let cost = weightInKg * pricePerKg;
    console.log(`I need $${cost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

calculateFruitCost('orange', 2500, 1.80);
calculateFruitCost('apple', 1563, 2.35);