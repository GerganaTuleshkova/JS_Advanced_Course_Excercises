function add(n) {
    let sum = n;

    function inner(number) {
        sum += number;
        // console.log(sum, inner.toString())
        return inner;
    }

    inner.toString = () => {
        // console.log(sum)
        return sum;
    }

    return inner;
}

console.log(add(1)(6)(-3))