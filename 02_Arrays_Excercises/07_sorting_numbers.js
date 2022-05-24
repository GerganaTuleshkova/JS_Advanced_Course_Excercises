function sortingNumbers(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    const iterrations = numbers.length;
    const result = [];
    for (let i = 0; i < iterrations; i++) {
        if (i % 2 == 0) {
            result.push(sortedNumbers.shift());
        } else {
            result.push(sortedNumbers.pop());
        }
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));