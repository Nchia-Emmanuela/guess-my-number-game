'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreteNumber);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No message';
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreteNumber;
    if (score > highscore) {
      highscore = score
      // console.log(highscore);
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'guess is too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'guess is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreteNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
