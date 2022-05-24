function printTheNthElement(stringsArray, step) {
    const result = []
    for (let i = 0; i < stringsArray.length; i += step) {
        result.push(stringsArray[i]);
    }
    return result;
}

console.log(printTheNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))