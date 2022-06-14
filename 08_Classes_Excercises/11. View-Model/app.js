class Textbox {
    constructor(selector, invalidSymbolsRegex) {
        // this.value;
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = invalidSymbolsRegex;
        Array.from(this._elements).forEach(el => el.addEventListener('change', () => this.value = el.value))
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this.elements[0].value;
    }

    set value(givenValue) {
        Array.from(this._elements).forEach(el => el.value = givenValue);
    }

    isValid() {
        return !this._invalidSymbols.test(this.elements[0].value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
console.log(textbox.value)

let inputs = document.getElementsByClassName('textbox');
console.log(inputs)

Array.from(inputs).forEach(el => el.addEventListener('click',function(){console.log(textbox.value);}));
