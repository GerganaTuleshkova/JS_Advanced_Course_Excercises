function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //remove classes from table rows
      for (element of document.querySelectorAll('tr')) {
         element.classList.remove('select');
      }

      const searchedText = document.getElementById('searchField').value;
      
      for (element of document.querySelectorAll('tr > td')) {

         
         if (element.textContent.includes(searchedText)) {
            element.parentElement.className = 'select';
            document.getElementById('searchField').value = ''
         }
      }
   }
}