'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreteNumber);

let score = 20;
let highscore = 0;

const setMessage = (message) => {
  return document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('No message');
    // console.log(message);
  } else if (guess === secreteNumber) {
    setMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreteNumber;
    if (score > highscore) {
      highscore = score;
      // console.log(highscore);
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secreteNumber) {
    if (score > 1) {
        setMessage(guess > secreteNumber ? 'too high' : 'too low')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      setMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  } 
});

// again button
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreteNumber);
  document.querySelector('.score').textContent = score;
  setMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
