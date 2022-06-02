function createSortedCatalogue(arrOfStrings) {
    const catalogue = [];

    for (let str of arrOfStrings) {
        let [name, price] = str.split(' : ');
        price = Number(price);
        catalogue.push([name, price]);
    }

    let sortedCatalogueArray = catalogue.sort(([a], [b]) => (a).localeCompare(b));

    const result = {};

    for (let element of sortedCatalogueArray) {
        let firstLetter = element[0][0].toUpperCase();
        if (!result[firstLetter]) {
            result[firstLetter] = [element];
        } else {
            result[firstLetter].push(element);
        }
    }

    for (let letter of Object.keys(result)) {
        console.log(letter);
        for (let product of result[letter]) {
            console.log(`  ${product[0]}: ${product[1]}`);
        }
    }
}


createSortedCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']

)