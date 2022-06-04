function solve() {
  let sectionElements = Array.from(document.querySelectorAll('section'));
  sectionElements.forEach(s => s.style.display = '');
  let resultElement = document.querySelector('#results li h1');
  resultElement.style.display = 'none';

  const correctAnswers = {
    0: 'quiz-answer low-value',
    1: 'quiz-answer high-value',
    2: 'quiz-answer low-value',
  }

  let rightAnswers = 0;

  sectionElements.forEach(s => s.addEventListener('click', onAnswerClick, true));

  function onAnswerClick(event) {
    if (event.target.className == 'answer-text') {
      let currentSection = event.currentTarget;
      let sectionIndex = sectionElements.indexOf(currentSection);
      let answerClassName = event.target.parentElement.parentElement.className;

      if (answerClassName == correctAnswers[sectionIndex]) {
        rightAnswers++;
      }

      currentSection.className = 'hidden';
      currentSection.style.display = 'none'
      if (sectionIndex + 1 == sectionElements.length) {
        showResult();
      } else {
        sectionElements[sectionIndex + 1].className = '';
        sectionElements[sectionIndex + 1].style.display = 'block';
      }
    }
  } 
  
  function showResult() {
    resultElement.style.display = 'block';
    document.getElementById('results').style.display = 'block';
    let resultText = '';
    if (rightAnswers == 3) {
      resultText = 'You are recognized as top JavaScript fan!';
    } else {
      resultText = `You have ${rightAnswers} right answers`;
    }
    sectionElements.forEach(s => s.style.display = 'none');

    resultElement.textContent = resultText;
  }
}
