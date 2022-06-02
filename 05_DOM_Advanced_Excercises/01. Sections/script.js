function create(words) {

   let parentDivElement = document.getElementById('content');
   parentDivElement.addEventListener('click', onClick);

   function createElement(word) {
      let element = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none'
      element.appendChild(pElement);
      parentDivElement.appendChild(element);
   }

   for (let word of words) {
      createElement(word);
   }

   function onClick(event) {
      if (event.target.nodeName == 'DIV')
         event.target.querySelector('p').style.display = ''
   }
}