function validityChecker(x1, y1, x2, y2) {
    function check(x1, y1, x2, y2) {
        let result = Math.sqrt( (x2 - x1) ** 2 + (y2 - y1) ** 2);
        let status = 'valid';
        
        if ((result * 100) % 100 != 0) {
            status = 'invalid';
        }
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);
    }

    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);