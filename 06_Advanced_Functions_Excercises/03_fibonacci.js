function fibonacci() {
    let numbers = [0, 1]
    return function increment() {
        let currentNumber = numbers[numbers.length - 1];

        let previousPreviousNumber = numbers[numbers.length - 2];
        let previousNumber = numbers[numbers.length - 1];
        numbers.push(previousNumber + previousPreviousNumber);
        
        return currentNumber;
    }
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); 
