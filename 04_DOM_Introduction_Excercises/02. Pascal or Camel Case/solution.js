function solve() {
  const givenText = document.getElementById('text').value;
  const words = givenText.split(' ')
  const namingConvention = document.getElementById('naming-convention').value;
  let result = '';

  function  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  if (namingConvention == 'Camel Case') {
    result += words.shift().toLowerCase();
    const restOfWords = words.map(w => capitalizeFirstLetter(w));
    result += restOfWords.join('');
  } 
  else if (namingConvention == 'Pascal Case') {
    const allWords = words.map(w => capitalizeFirstLetter(w));
    result += allWords.join('');
  } 
  else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}