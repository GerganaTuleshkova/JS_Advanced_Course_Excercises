function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const meals = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    let actions = {
        prepare,
        restock,
        report,
    }

    function prepare(meal, quantity) {
        let requiredIngredients = meals[meal];
        quantity = Number(quantity);

        for (let ingredient of Object.keys(requiredIngredients)) {
            if (requiredIngredients[ingredient] * quantity > ingredients[ingredient]) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }
        for (let ingredient of Object.keys(requiredIngredients)) {
            ingredients[ingredient] -= requiredIngredients[ingredient] * quantity;
        }
        return 'Success';
    }

    function restock(product, quantity) {
        ingredients[product] += Number(quantity);
        return 'Success';
    };

    function report() {
        let result = '';
        for (let ingredientName in ingredients) {
            result += `${ingredientName}=${ingredients[ingredientName]} `;
        }
        return (result.trim());
    };

    function control(commandString) {
        let [action, product, quantity] = commandString.split(' ');
        quantity = Number(quantity);

        return actions[action](product, quantity);
    }

    return control;
}


let manager = solution();
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock protein 10"));

console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock carbohydrate 10"));

console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock fat 10"));

console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock flavour 10"));

console.log(manager("prepare turkey 1")); // Success 
console.log(manager("report"));
