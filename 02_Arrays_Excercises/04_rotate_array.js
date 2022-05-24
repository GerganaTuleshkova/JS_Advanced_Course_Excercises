function rotateArray(array, numberOfRotations) {
    for (let n = 0; n < numberOfRotations; n++) {
        let lastElement = array.pop();
        array.unshift(lastElement)
        
    }
    console.log(array.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);