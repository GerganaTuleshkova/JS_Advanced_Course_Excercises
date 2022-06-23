window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let addButton = document.getElementById('add');
    let tableBody = document.getElementById('furniture-list');
    let totalPrice = document.querySelector('.total-price');

    addButton.addEventListener('click', add);
    tableBody.addEventListener('click', showMoreInfo);
    tableBody.addEventListener('click', buy);

    function add(event) {
        event.preventDefault();

        if (model.value != ''
            && year.value != ''
            && Number(year.value) > 0
            && description.value != ''
            && price.value != ''
            && Number(price.value) > 0) {

            let currentInnerHTML = tableBody.innerHTML;

            tableBody.innerHTML = currentInnerHTML
                + `<tr class="info">\
            <td>${model.value}</td>\
            <td>${Number(price.value).toFixed(2)}</td>\
            <td>\
            <button class="moreBtn">More Info</button>\
            <button class="buyBtn">Buy it</button>\
            </td>\
            </tr>\
            <tr class="hide">\
            <td>Year: ${Number(year.value)}</td>\
            <td colspan="3">Description: ${description.value}</td>\
            </tr>`;

            model.value = '';
            year.value = '';
            description.value = '';
            price.value = '';

            let moreInfoButton = tableBody;
        }
    }

    function showMoreInfo(event) {
        if (event.target.className == "moreBtn") {
            let additionalInfoEl = event.target.parentElement.parentElement.nextSibling.nextSibling;
            if (event.target.textContent == "More Info") {
                additionalInfoEl.style.display = "contents";
                event.target.textContent = "Less Info";
            } else {
                additionalInfoEl.style.display = "none";
                event.target.textContent = "More Info";
            }
        }
    }

    function buy(event) {
        if (event.target.className == "buyBtn") {
            let furnitueElement = event.target.parentElement.parentElement;
            let priceToAdd = Number(furnitueElement.querySelectorAll('td')[1].textContent);
            let currentTotalPrice = Number(totalPrice.textContent);
            totalPrice.textContent = (priceToAdd + currentTotalPrice).toFixed(2);
            furnitueElement.remove();
        }
    }
}
