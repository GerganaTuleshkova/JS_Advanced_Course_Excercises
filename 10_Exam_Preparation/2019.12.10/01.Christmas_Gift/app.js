function solution() {
    let [addSection, listSection, sentSection, discardedSection] = Array.from(document.querySelector('div').querySelectorAll('section'));
    let addGiftButton = addSection.querySelector('button');
    let giftNameElement = addSection.querySelector('input');
    let listOfGifts = [];


    addGiftButton.addEventListener('click', addGift);

    function addGift(event) {
        let nameOfGift = giftNameElement.value;
        listOfGifts.push(nameOfGift);
        listOfGifts = listOfGifts.sort((a, b) => a.localeCompare(b));

        // listSection.querySelector('ul').innerHTML = ''
        Array.from(listSection.querySelector('ul').children).forEach(child => child.remove())

        listOfGifts.map(gift => createGiftLi(gift, listSection.querySelector('ul')));

        giftNameElement.value = ''
    }

    function createGiftLi(giftName, parentElement) {
        let li = document.createElement('li');
        li.textContent = giftName;
        li.className = "gift";

        let sendButton = document.createElement('button');
        sendButton.id = 'sendButton';
        sendButton.textContent = "Send";

        let discardButton = document.createElement('button');
        discardButton.id = 'discardButton';
        discardButton.textContent = "Discard";

        parentElement.appendChild(li);
        li.appendChild(sendButton);
        li.appendChild(discardButton);

        sendButton.addEventListener('click', sendGift);
        discardButton.addEventListener('click', discardGift)
    }

    function sendGift(event) {
        let giftLi = event.target.parentElement;
        Array.from(giftLi.querySelectorAll('button')).forEach(b => b.remove())
        sentSection.querySelector('ul').appendChild(giftLi);
    }

    function discardGift(event) {
        let giftLi = event.target.parentElement;
        Array.from(giftLi.querySelectorAll('button')).forEach(b => b.remove())
        discardedSection.querySelector('ul').appendChild(giftLi);
    }
}
