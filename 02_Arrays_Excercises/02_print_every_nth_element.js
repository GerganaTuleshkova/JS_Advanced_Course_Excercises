function printTheNthElement(stringsArray, step) {
    // const result = []
    // for (let i = 0; i < stringsArray.length; i += step) {
    //     result.push(stringsArray[i]);
    // }
    // return result;

    // second option
    return stringsArray.filter((_, index) => index % step == 0);

}

console.log(printTheNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))