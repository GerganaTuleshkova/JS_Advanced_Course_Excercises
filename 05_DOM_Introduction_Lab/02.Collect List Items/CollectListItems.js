function extractText() {
    const listItems = Array.from(document.getElementsByTagName('li'));

    let itemsTexts = listItems.map(e => e.textContent);
    const resultText = itemsTexts.join('\n');

    document.getElementById('result').textContent = resultText;
}