class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        if (typeof number == 'number') {
            return new Hex(this.value + number);
        } else if (number instanceof Hex) {
            return new Hex(this.value + number.valueOf());
        }
    }

    minus(number) {
        if (typeof number == 'number') {
            return new Hex(this.value - number);
        } else if (number instanceof Hex) {
            return new Hex(this.value - number.valueOf());
        }
    }

    parse(hexString) {
        return parseInt(hexString, 16);
    }
}

let FF = new Hex(10);
console.log(FF.toString());
console.log(FF instanceof Hex)
console.log(FF.plus(5).toString());


FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
