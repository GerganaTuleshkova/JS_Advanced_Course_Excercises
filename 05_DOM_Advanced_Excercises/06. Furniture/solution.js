function solve() {
  let inputButtons = document.querySelectorAll('#exercise button');
  inputButtons[0].addEventListener('click', onGenerateClick);
  inputButtons[1].addEventListener('click', onBuyClick);

  function onGenerateClick() {
    let input = JSON.parse(document.querySelectorAll('#exercise textarea')[0].value);

    for (let itemInput of input) {
      let newItem = document.createElement('tr')

      let dataImage = document.createElement('td')
      let image = document.createElement('img')
      image.src = itemInput.img;
      dataImage.appendChild(image);
      newItem.appendChild(dataImage);

      let dataName = document.createElement('td')
      let name = document.createElement('p')
      name.textContent = itemInput.name;
      dataName.appendChild(name);
      newItem.appendChild(dataName);

      let dataPrice = document.createElement('td')
      let price = document.createElement('p')
      price.textContent = itemInput.price;
      dataPrice.appendChild(price);
      newItem.appendChild(dataPrice);

      let dataFactor = document.createElement('td')
      let factor = document.createElement('p')
      factor.textContent = itemInput.decFactor;
      dataFactor.appendChild(factor);
      newItem.appendChild(dataFactor);

      let dataCheckbox = document.createElement('td')
      let checkbox = document.createElement('input')
      checkbox.type = "checkbox";
      // checkbox.disabled = true;
      dataCheckbox.appendChild(checkbox);
      newItem.appendChild(dataCheckbox);

      document.querySelector('tbody').appendChild(newItem);
    }
  }

  function onBuyClick() {
    let itemsElements = Array.from(document.querySelector('tbody').children);

    let itemsPurchased = []
    let totalPrice = 0;
    let totalFactor = 0
    let itemsCount = 0;

    for (let itemElement of itemsElements) {
      if (itemElement.querySelector('input').checked) {
        let [nameEl, priceEl, factorEl] = itemElement.querySelectorAll('td p');
        let name = nameEl.textContent;
        let price = Number(priceEl.textContent);
        let factor = Number(factorEl.textContent);

        itemsPurchased.push(name);
        totalPrice += price;
        totalFactor += factor;
        itemsCount += 1;
      }
    }

    let resultText = `Bought furniture: ${itemsPurchased.join(', ')}`;
    resultText += `\nTotal price: ${totalPrice.toFixed(2)}`;
    resultText += `\nAverage decoration factor: ${totalFactor/ itemsCount}`

    document.querySelectorAll('#exercise textarea')[1].value = resultText;

  }


}