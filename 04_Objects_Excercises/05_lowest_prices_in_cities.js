function findLowestPrices(arrOfStrings) {
    const productPrices = {};

    for (let str of arrOfStrings) {
        let [town, product, price] = str.split(' | ');
        price = Number(price);

        if (productPrices[product]) {
            if (price < productPrices[product].price) {
                productPrices[product] = {price: price, town: town};
            }
        } else {
            productPrices[product] = {price: price, town: town};
        }
    }

    for (let [product, details] of Object.entries(productPrices) ) {
        console.log(`${product} -> ${details.price} (${details.town})`);
    }
}

findLowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)