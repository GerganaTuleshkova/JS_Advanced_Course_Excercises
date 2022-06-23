class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(productsList) {
        for (let productStr of productsList) {
            let [name, quantity, price] = productStr.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (price <= this.budgetMoney) {
                this.budgetMoney -= price;
                if (!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += quantity;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }
        return this.history.slice(-productsList.length).join('\n');
    }

    addToMenu(mealName, neededProductsList, price) {
        if (this.menu.hasOwnProperty(mealName)) {
            return `The ${mealName} is already in the our menu, try something different.`;
        }

        this.menu[mealName] = {
            products: neededProductsList,
            price,
        }

        let mealsCount = Object.keys(this.menu).length;
        if (mealsCount == 1) {
            return `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?`;
        }

        return `Great idea! Now with the ${mealName} we have ${mealsCount} meals in the menu, other ideas?`;
    };

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        };

        let result = [];

        for (let [name, info] of Object.entries(this.menu)) {
            result.push(`${name} - $ ${info.price}`);
        }      

        return result.join('\n');
    }

    makeTheOrder(meal) {

        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (let needeProductStr of this.menu[meal].products) {
            let [productName, neededQuantity] = needeProductStr.split(' ');
            neededQuantity = Number(neededQuantity);

            if (this.stockProducts[productName] < neededQuantity || !this.stockProducts.hasOwnProperty(productName)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (let needeProductStr of this.menu[meal].products) {
            let [productName, neededQuantity] = needeProductStr.split(' ');
            neededQuantity = Number(neededQuantity);
            this.stockProducts[productName] -= neededQuantity;
        }

        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}



let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']));
console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']));
console.log(kitchen.stockProducts)
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 10', 'Strawberries 40'], 9.99));
// console.log(kitchen.addToMenu('frozenYogurt2', ['Yogurt 1', 'Honey 1', 'Banana 10', 'Strawberries 10'], 9.99));
console.log(kitchen.showTheMenu())

console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));

console.log(kitchen.budgetMoney);
console.log(kitchen.stockProducts)


