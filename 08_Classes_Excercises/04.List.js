class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(element) {
        if (typeof element == 'number') {
            this.numbers.push(element);
            this.numbers.sort((a, b) => a - b);
            this.size++;
        }
        return this;
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.numbers.splice(index, 1);
            this.size--;
        }
        return this;
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.numbers[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.numbers);
console.log(list.size);

console.log(list.get(1));
list.remove(1);
console.log(list.numbers);

console.log(list.get(1));
console.log(list.size);
console.log(list.hasOwnProperty('size'))

console.log(Object.getOwnPropertyNames(list));
