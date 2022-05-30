function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      for (element of document.querySelectorAll('tr')) {
         element.classList.remove('select')

      }
      const searchedText = document.getElementById('searchField').value;
      for (element of document.querySelectorAll('tr > td')) {
         console.log(element)
         if (element.textContent.includes(searchedText)) {
            element.parentElement.className = 'select'
         }
      }
   }
}