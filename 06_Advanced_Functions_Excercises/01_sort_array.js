function sortArray(array, sortingBy) {
    let arr = array;

    sortingMapping = {
        asc: () => arr.sort((a, b) => a - b),
        desc: () => arr.sort((a, b) => b - a),
    }

    sortingMapping[sortingBy]();
    return arr;
}

sortArray([14, 7, 17, 6, 8], 'desc')