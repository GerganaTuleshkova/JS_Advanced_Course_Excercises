function solve() {
  const text = document.getElementById('input').value
  let sentences = text.split('.').filter(s => s.length > 0);
  let sents = sentences.map(s => (s.trim()))
  let data = '';

  for (let i = 0; i < sents.length; i += 3) {
    let paraText = sents.slice(i, i + 3)
    data += `<p>${paraText.join('. ')}.</p>`
  }

  document.getElementById('output').innerHTML = data;
}