class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        };
        this.spaceAvailable -= spaceRequired;
        this.plants.push(plant);
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let searchedPlant = this.plants.find((x) => x.plantName == plantName);

        // let searchedPlant;
        // for (let plant of this.plants) {
        //     if (plant.plantName == plantName) {
        //         searchedPlant = plant;
        //     }
        // }

        if (searchedPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (searchedPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        searchedPlant.ripe = true;
        searchedPlant.quantity += quantity;
        if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        } else {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let searchedPlant = this.plants.find((x) => x.plantName == plantName);

        // let searchedPlant;
        // for (let plant of this.plants) {
        //     if (plant.plantName == plantName) {
        //         searchedPlant = plant;
        //     }
        // }
        
        if (searchedPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!searchedPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants = this.plants.filter(plant => plant !== searchedPlant);
        let quantity = searchedPlant.quantity;
        this.storage.push({ plantName, quantity });
        this.spaceAvailable += searchedPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.`;

        let sortedPlantsList = this.plants.map(plant => `${plant.plantName}`);
        sortedPlantsList = sortedPlantsList.sort((a, b) => (a).localeCompare(b));

        result += '\nPlants in the garden: ';
        result += sortedPlantsList.join(', ');

        if (this.storage.length == 0) {
            result += '\nPlants in storage: The storage is empty.'
        } else {
            result += '\nPlants in storage: ';

            let storagePlantStringsList = this.storage.map(plant => `${plant.plantName} (${plant.quantity})`);
            result += storagePlantStringsList.join(', ');
        }
        return result;
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

