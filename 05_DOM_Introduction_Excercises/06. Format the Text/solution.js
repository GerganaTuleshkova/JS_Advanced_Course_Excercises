function solve() {
  const text = document.getElementById('input').value
  let sentences = text.split('.')

  let validSentences = sentences.filter(s => s.length > 0);

  let sents = validSentences.map(s => (s.trim()))
  

  let data = '';
  for (let i = 0; i < (sents.length); i += 3) {
    let paraText = sents.slice(i, i+3)
    console.log(paraText.length)
    data += `<p>${paraText.join('. ')}.</p>`
  }


  // console.log(data)


  document.getElementById('output').innerHTML = data;

}