function biggerHalf(array) {
    const sortedArray = array.sort((a, b) => a- b);
    const start = Math.floor(sortedArray.length/2);
    const result = sortedArray.slice(start)
    console.log(result);
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);
biggerHalf([4, 7, 2, 5]);