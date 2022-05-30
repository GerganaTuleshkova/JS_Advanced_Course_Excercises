function search() {
   // clear the styling
   for (city of document.getElementsByTagName('li'))  {
         city.style.fontWeight = 'normal';
         city.style.textDecoration = "none";
   }

   let cities = Array.from(document.getElementsByTagName('li')).map(c => c.textContent);
   const searchedText = document.getElementById('searchText').value;

   // make a list of city names that contain the searched word
   let foundMatches = cities.filter(city => city.includes(searchedText));
   // 'print' the number of matches
   document.getElementById('result').textContent = `${foundMatches.length} matches found`;
   
   // underline and bold the city objects that contain the searched word
   for (city of document.getElementsByTagName('li')) {
      if (foundMatches.includes(city.textContent)) {
         city.style.fontWeight = 'bold';
         city.style.textDecoration = "underline";
      }
   }
}
