function extractText() {
    // const resultText = ''
    const listItems = Array.from(document.getElementsByTagName("li"));

    let itemsTexts = listItems.map(e => e.textContent);
    console.log(itemsTexts)
    const resultText = itemsTexts.join('\n');
    console.log(resultText);

    document.getElementById('result').textContent = resultText;

    

}