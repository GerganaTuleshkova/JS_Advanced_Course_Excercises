(function solve() {
    String.prototype.ensureStart = function (str) {
        // if (this.startsWith(str))
        if (this.slice(0, str.length) != str) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (this.slice(-str.length) != str) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function (str) {
        return (this.length == 0);
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n <= 3) {
            return '.'.repeat(n);
        }

        let lastIndex = this.substring(0, n-2).lastIndexOf(' ');

        if (lastIndex != -1) {
            return this.substring(0, lastIndex) + '...';
        } else {
            return this.substring(0, n-3) + '...';
        }
    };

    String.format = function(string, ...params) {
        let newStr = string;
        for (i = 0; i < params.length; i++) {
               newStr =  newStr.replace(`{${i}}`, params[i]);
        }
        return newStr;
    };
})()

let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)

str = str.truncate(16);
console.log(str)

str = str.truncate(14);
console.log(str)

str = str.truncate(8);
console.log(str)

str = str.truncate(4);
console.log(str)

str = str.truncate(2);
console.log(str)

str = String.format('The {0} {1} fox',
  'quick', 'brown');
console.log(str)

str = String.format('jumps {0} {1}',
  'dog');
console.log(str)

