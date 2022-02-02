'use strict';

let number = Math.trunc(Math.random() * 20) + 1; //generates random # 1-20
let score = Number(document.querySelector('.score').textContent);
let guess;


function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function guessLogic() {
    guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage("Invalid input, Please enter a number");
    }
    else if (guess > number) {
        displayMessage('Too High!');
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (guess < number) {
        displayMessage('Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
    }
    else {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = number;
        if (score > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = score
        }
    }
}

function againLogic() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ''; //clears guess box
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
}

document.querySelector('.check').addEventListener('click', guessLogic);

document.querySelector('.again').addEventListener('click', againLogic);
