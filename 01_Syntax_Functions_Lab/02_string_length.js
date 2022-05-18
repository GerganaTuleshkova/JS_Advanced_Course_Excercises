function stringLength(string1, string2, string3) {
    let sumOfLengths = (string1 + string2 +string3).length;
    let averageLength = sumOfLengths / 3;
    
    console.log(sumOfLengths);
    console.log(Math.floor(averageLength));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');