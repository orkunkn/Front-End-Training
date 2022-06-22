'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const game = function () {
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      highScore++;
      document.querySelector('.label-highscore').textContent =
        '🥇 Highscore: ' + highScore;
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too big!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Game is over.';
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too small!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Game is over.';
      }
    }
  });
};
game();

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  game();
});
