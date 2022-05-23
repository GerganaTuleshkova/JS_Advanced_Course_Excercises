function evenPositionElements(array) {
    let arrayOnEven = [];
    for (let i = 0; i < array.length; i += 2) {
        
        arrayOnEven.push(array[i]);
    }
    console.log(arrayOnEven.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);