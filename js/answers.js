export function answers() {
  const answerButton = document.querySelector('[data-js="answer-button"]');
  const answerText = document.querySelector('[data-js="answer-text"]');

  answerButton?.addEventListener('click', () => {
    if (answerButton.textContent.trim() === 'Show answer') {
      answerButton.textContent = 'Hide answer';
    } else {
      answerButton.textContent = 'Show answer';
    }
    answerText.classList.toggle('card__answer--hide');
  });
}
