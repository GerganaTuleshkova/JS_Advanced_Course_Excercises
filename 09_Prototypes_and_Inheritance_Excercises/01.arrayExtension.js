(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
    
    Array.prototype.skip = function(n) {
        return this.slice(n);
    }

    Array.prototype.take = function(n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function() {
        let sumOfElements = 0;
        for (let el of this) {
            sumOfElements += el
        }
        return sumOfElements;
    }

    Array.prototype.average = function() {
        return (this.sum() / this.length);
    }

}) ();

let myArr = [1, 2, 366]
console.log(myArr.last())
console.log(myArr.skip(1))
console.log(myArr.take(20))
console.log(myArr.sum())
console.log(myArr.average())


