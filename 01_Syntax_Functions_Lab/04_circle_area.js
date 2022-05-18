function calculateArea(radius) {
    let typeOfRadius = typeof radius;
    console.log(typeOfRadius);
    if (typeOfRadius == 'number') {
        let area = radius ** 2 * Math.PI;
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfRadius}.`)
    }
}

calculateArea(5);
calculateArea('name');