function sumFirtsAndLast(array) {
    let sum = Number(array.shift()) + Number(array.pop());
    console.log(sum);
}

sumFirtsAndLast(['20', '30', '40'])