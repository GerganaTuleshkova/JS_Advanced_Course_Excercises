function calculator() {
    let selector1Element = null;
    let selector2Element = null;
    let resultElement = null;


    let obj = {
        selector1Element,
        selector2Element,
        resultElement,
        init: init,
        add: add,
        subtract: subtract,
    }

    function init(selector1, selector2, resultSelector) {
        selector1Element = document.querySelector(selector1);
        selector2Element = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
    }

    function add() {
        let result = Number(selector1Element.value) + Number(selector2Element.value);
        resultElement.value = result;
    }

    function subtract() {
        let result = Number(selector1Element.value) - Number(selector2Element.value);
        resultElement.value = result;
    }

    return obj;
}


const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





