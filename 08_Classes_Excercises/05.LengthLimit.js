class Stringer {
    constructor(initialString, initialLength) {
        this.innerString = initialString;
        this.innerLength = initialLength;
    }

    increase(length) {
        this.innerLength += length;

    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        let toCutIndex = this.innerString.length - this.innerLength;
        if (toCutIndex > 0) {

            return `${this.innerString.slice(0, -(toCutIndex))}...`;
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
console.log(test.innerString); 
console.log('-------------------')


test.decrease(3);
console.log(test.toString()); // Te...
console.log(test.innerString); 
console.log('-------------------')

test.decrease(5);
console.log(test.toString()); // ...
console.log(test.innerString); 
console.log('-------------------')

test.increase(15);
console.log(test.toString()); // Test
