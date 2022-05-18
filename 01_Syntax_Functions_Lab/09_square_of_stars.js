function drawSwareOfStars(rows) {
    if (rows == undefined) {
        for (let i = 0; i < 5; i++) {
            console.log('*'.repeat(5));
        }
    } else {
        for (let i = 0; i < rows; i++) {
            console.log('*'.repeat(rows));
        }
    }
}


drawSwareOfStars(1);
drawSwareOfStars()