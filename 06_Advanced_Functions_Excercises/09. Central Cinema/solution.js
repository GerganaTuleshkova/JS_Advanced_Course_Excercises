function solve() {
    let [name, hall, ticketPrice, onScreenButton] = Array.from(document.getElementById('container').children);
    
    onScreenButton.addEventListener('click', addMovie);
    document.getElementById('archive').children[2].addEventListener('click', onClearClick);

    function createElement(type, text, parent) {
            let element = document.createElement(type);
            element.textContent = text;
            parent.appendChild(element);
    }

    function addMovie(event) {
        event.preventDefault()
        if (name.value && hall.value && ticketPrice.value && !isNaN(Number(ticketPrice.value))) {
            let liElement = document.createElement('li');
            createElement('span', name.value, liElement);
            // let span = document.createElement('span');
            // span.textContent = name.value;
            // liElement.appendChild(span);

            createElement('strong', `Hall: ${hall.value}`, liElement);
            // let strong = document.createElement('strong');
            // strong.textContent = 'Hall: ' + hall.value;
            // liElement.appendChild(strong);

            let div = document.createElement('div');

            createElement('strong', Number(ticketPrice.value).toFixed(2), div);
            // let strong2 = document.createElement('strong');
            // strong2.textContent = Number(ticketPrice.value).toFixed(2);
            // div.appendChild(strong2);

            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            div.appendChild(input);

            let button = document.createElement('button');
            button.textContent = 'Archive';
            button.addEventListener('click', onArchiveClick);
            div.appendChild(button);

            liElement.appendChild(div);

            document.getElementById('movies').children[1].appendChild(liElement);

        // clear the input fields
        name.value = '';
        hall.value = '';
        ticketPrice.value = '';    
        }
    }

    function onArchiveClick(event) {
        let patentLi = event.target.parentElement.parentElement;
        let name = patentLi.querySelector('span').textContent;
        let price = Number(patentLi.querySelector('div').querySelector('strong').textContent);
        let ticketsSold = (patentLi.querySelector('div').querySelector('input').value);

        if (ticketsSold && !isNaN(Number(ticketsSold))) {
            let ArchivedElement = document.createElement('li');

            createElement('span', name, ArchivedElement);
            
            // let span = document.createElement('span');
            // span.textContent = name;
            // ArchivedElement.appendChild(span);

            createElement('strong', `Total amount: ${(ticketsSold * price).toFixed(2)}`, ArchivedElement)

            // let strong = document.createElement('strong');
            // strong.textContent = `Total amount: ${(ticketsSold * price).toFixed(2)}`;
            // ArchivedElement.appendChild(strong);

            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.addEventListener('click', onDeleteClick);
            ArchivedElement.appendChild(button);

            document.getElementById('archive').children[1].appendChild(ArchivedElement);

            patentLi.remove();
        }
    }

    function onDeleteClick(event) {
        event.target.parentElement.remove();
    }

    function onClearClick(event) {
        let ulElementChildren = Array.from(event.target.parentElement.children[1].children);
        ulElementChildren.forEach(el => el.remove());
    }
}