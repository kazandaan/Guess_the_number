'use strict';
let guess = document.querySelector('.guess');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let number = document.querySelector('.number');
let highscore = document.querySelector('.highscore');
let body = document.querySelector('body');

//GENERATE A RANDOM NUMBER BETWEEN 1-20
const random = Math.floor(Math.random() * 20) + 1;
console.log(random);

//CHECK BUTTON event
document.querySelector('.check').addEventListener('click', function () {
  if (score.textContent != 0) {
    if (guess.value == random) {
      number.textContent = guess.value;
      console.log('Correct number.');
      number.style.width = '300px';
      body.style.backgroundColor = '#60b347';
      message.textContent = '🎉 Correct number!';
      highscore.textContent = score.textContent;
    } else if (guess.value != random && guess.value != '') {
      console.log('Wrong number. Keep trying.');
      score.textContent = score.textContent - 1;
      message.textContent = guess.value < random ? 'Too low' : 'Too high';
    } else {
      alert('Cannot be blank.');
    }
  } else {
    alert('You have lost ! Please try again.');
  }
});

//RESET BUTTON event
document.querySelector('.again').addEventListener('click', function () {
  guess.value = '';
  message.value = '';
  number.textContent = '?';
  score.textContent = 20;
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
  console.clear();
});
