function encodeAndDecodeMessages() {
    let divChildElements = document.querySelectorAll('#main div');
    let encodeElement = divChildElements[0];
    let decodeElement = divChildElements[1];
    encodeElement.querySelector('textarea').value = '';
    decodeElement.querySelector('textarea').value = '';

    encodeElement.querySelector('button').addEventListener('click', onEncodeClick);
    decodeElement.querySelector('button').addEventListener('click', onDecodeClick);

    function onEncodeClick(event) {
        let textInput = event.target.parentElement.querySelector('textarea');
        let decodedText = decode(textInput.value)
        textInput.value = ''
        decodeElement.querySelector('textarea').value = decodedText;
        console.log(decodedText)
    }

    function decode(text) {
        let result = ''
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) + 1);
        }
        return result;
    }

    function onDecodeClick() {
        let decodedText = decodeElement.querySelector('textarea').value;
        let encodedText = encode(decodedText);
        decodeElement.querySelector('textarea').value = encodedText;
    }

    function encode(text) {
        let result = ''
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) - 1);
        }
        return result;
    }
}