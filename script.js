'use strict';

const secreteNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreteNumber);

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No message';
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
  } else if (guess > secreteNumber) {
    document.querySelector('.message').textContent = 'guess is too high';
    score--
    document.querySelector('.score').textContent = score
  } else if (guess < secreteNumber) {
    document.querySelector('.message').textContent = 'guess is too low';
    score--
    document.querySelector('.score').textContent = score
  }
});
