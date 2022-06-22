class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let loadedVegetables = [];
        for (let vegString of vegetables) {
            let [vegetableName, quantity, price] = vegString.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let currentVegetable = {
                type: vegetableName,
                quantity,
                price,
            }

            let existingVegetable = this.availableProducts.find((veg) => veg.type == vegetableName)

            if (existingVegetable) {
                existingVegetable.quantity += quantity;
                // existingVegetable.price = existingVegetable.price < price ? price : existingVegetable.price 
                if (existingVegetable.price < price) {
                    existingVegetable.price = price;
                }
            } else {
                this.availableProducts.push(currentVegetable);
                loadedVegetables.push(vegetableName);
            }
        }

        return `Successfully added ${loadedVegetables.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let bill = 0;
        for (let vegString of selectedProducts) {
            let [nameToPurchase, quantityToPurchase] = vegString.split(' ');
            quantityToPurchase = Number(quantityToPurchase);
            let foundVegetable = this.availableProducts.find((veg) => veg.type == nameToPurchase);

            if (!foundVegetable) {
                throw new Error(`${nameToPurchase} is not available in the store, your current bill is $${bill.toFixed(2)}.`);
            }

            if (foundVegetable.quantity < quantityToPurchase) {
                throw new Error(`The quantity ${quantityToPurchase} for the vegetable ${nameToPurchase} is not available in the store, \
                your current bill is $${bill.toFixed(2)}.`)
            }

            bill += foundVegetable.price * quantityToPurchase;
            foundVegetable.quantity -= quantityToPurchase;
            
        }
        return `Great choice! You must pay the following amount $${bill.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let foundVegetable = this.availableProducts.find((veg) => veg.type == type);

        if (!foundVegetable) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (foundVegetable.quantity < quantity) {
            foundVegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        foundVegetable.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let result = []
        result.push("Available vegetables:");

        let sortedVegetables = this.availableProducts.sort((a, b) => a.price - b.price);
        sortedVegetables =  sortedVegetables.map(veg => `${veg.type}-${veg.quantity}-$${veg.price}`);
        
        result.push(sortedVegetables.join('\n'));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

