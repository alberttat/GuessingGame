'use strict';

let number = Math.trunc(Math.random() * 20) + 1; //generates random # 1-20
let score = Number(document.querySelector('.score').textContent);
let guess;
document.querySelector('.number').textContent = number;


function guessLogic() {
    //console.log(document.querySelector('.guess').value);
    guess = Number(document.querySelector('.guess').value);

    //console.log("score is" + score);
    if (!guess) {
        document.querySelector('.message').textContent = 'Invalid input, Please enter a number';
    }
    else if (guess > number) {
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (guess < number) {
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else {
        document.querySelector('.message').textContent = 'Correct Number!';
        if (score > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = score
        }
    }
}

function againLogic() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ''; //clears guess box
    number = Math.trunc(Math.random() * 20) + 1; //generates random # 1-20
    document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', guessLogic);

document.querySelector('.again').addEventListener('click', againLogic);
