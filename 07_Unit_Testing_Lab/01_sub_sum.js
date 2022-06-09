function sum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    let result = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        result += Number(arr[i]);
    }

    return result;
}

console.log(sum([10, 'twenty', 30, 40], 0, 2));