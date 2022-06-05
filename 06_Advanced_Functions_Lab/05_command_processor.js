function solution() {
    let string = '';

    let result = {
        append(str) {
            string += str;
        },
        removeStart(n) {
            string = string.slice(n);
        },
        removeEnd(n) {
            string = string.slice(0, -n);
        },
        print() {
            console.log(string);
        }
    }

    function append(str) {
        string += str;
    }

    return result;
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
