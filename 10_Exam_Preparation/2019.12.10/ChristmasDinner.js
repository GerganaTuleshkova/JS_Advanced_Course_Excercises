class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {
        };
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    shopping(productsInfoList) {
        let [productName, price] = productsInfoList;
        price = Number(price);

        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(productName);
        this.budget -= price;
        return `You have successfully bought ${productName}!`
    }

    recipes(recipeObj) {
        // let allProductsAvaila
        for (let product of recipeObj.productsList) {
            if ( !this.products.includes(product)) {
                throw new Error('We do not have this product');
            }
        }

        this.dishes.push(recipeObj);
        return `${recipeObj.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let dishesNames = this.dishes.map(dish => dish.recipeName);
        if (!dishesNames.includes(dish)) {
            throw new Error('We do not have this dish');
        }

        if (Object.keys(this.guests).includes(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = []
        for (let guest of Object.keys(this.guests)) {
            let guestDish = this.guests[guest];
            let dish = this.dishes.find( dishObj => dishObj.recipeName == guestDish)
            let guestString = `${guest} will eat ${guestDish}, which consists of ${dish.productsList.join(', ')}`;
            result.push(guestString);           
        }

        return result.join('\n');
    }
}






let dinner = new ChristmasDinner(300);

console.log(dinner.budget)

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));

console.log(dinner.showAttendance());
