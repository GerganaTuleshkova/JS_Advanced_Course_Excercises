function extractIncreasingSubset(array) {
    let currentElement = array.shift();
    const result = [currentElement];

    for (let number of array) {
        if (number >= result[result.length-1]) {
            result.push(number);
        }
    }

    console.log(result);
}

extractIncreasingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );