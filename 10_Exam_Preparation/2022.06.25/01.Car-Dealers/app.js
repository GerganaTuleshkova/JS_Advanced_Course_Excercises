window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let publishButton = document.getElementById('publish');
  let tableBody = document.getElementById('table-body');
  let soldCarsList = document.getElementById('cars-list');
  let profit = document.getElementById('profit');

  publishButton.addEventListener('click', publish)

  function publish(event) {
    event.preventDefault()

    if (make.value != ''
      && model.value != ''
      && year.value != ''
      && fuel.value != ''
      && originalCost.value != ''
      && sellingPrice.value != ''
      && Number(sellingPrice.value) > Number(originalCost.value);
    ) {

      let carObj = {
        make: make.value,
        model: model.value,
        year: year.value,
        fuel: fuel.value,
        originalCost: Number(originalCost.value),
        sellingPrice: Number(sellingPrice.value),
      }

      let carTr = document.createElement('tr');
      carTr.className = 'row';
      carTr.innerHTML = `\
      <td>${carObj.make}</td>\
      <td>${carObj.model}</td>\
      <td>${carObj.year}</td>\
      <td>${carObj.fuel}</td>\
      <td>${carObj.originalCost}</td>\
      <td>${carObj.sellingPrice}</td>\
      <td>\
      <button class="action-btn edit">Edit</button>\
      <button class="action-btn sell">Sell</button>\
      </td>
      `

      tableBody.appendChild(carTr);

      make.value = '';
      model.value = '';
      year.value = '';
      fuel.value = '';
      originalCost.value = '';
      sellingPrice.value = '';

      let editButton = carTr.querySelector('.edit');
      editButton.addEventListener('click', edit);

      let sellButton = carTr.querySelector('.sell');
      sellButton.addEventListener('click', sell)

      function edit(event) {
        make.value = carObj.make;
        model.value = carObj.model;
        year.value = carObj.year;
        fuel.value = carObj.fuel;
        originalCost.value = carObj.originalCost;
        sellingPrice.value = carObj.sellingPrice;

        carTr.remove();
      }

      function sell(event) {
        carTr.remove();

        let profitFromSale = carObj.sellingPrice - carObj.originalCost

        let carLi = document.createElement('li');
        carLi.className = "each-list";
        carLi.innerHTML = `\
         <span>${carObj.make} ${carObj.model}</span>\
         <span>${carObj.year}</span>\
         <span>${profitFromSale}</span>\
         `;

        soldCarsList.appendChild(carLi);

        let currentProfit = Number(profit.textContent);
        profit.textContent = (currentProfit + profitFromSale).toFixed(2);
      }
    }
  }
}
