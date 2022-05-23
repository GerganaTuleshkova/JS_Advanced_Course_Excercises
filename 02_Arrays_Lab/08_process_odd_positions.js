function processOddPositions(numbers) {
    const result = numbers.filter((_, i) => i % 2);
    const doubled = result.map(n => n * 2);
    doubled.reverse();
    return doubled.join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));