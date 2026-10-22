let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};

updateScoreElement();

let isAutoPlaying = false;
let interValId;

function autoPlay() {
    if (!isAutoPlaying) {
        document.querySelector('.js-autoplay-button').innerHTML = 'Stop Playing';
        interValId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        isAutoPlaying = true;
    } else {
        document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play';
        clearInterval(interValId);
        isAutoPlaying = false;
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
});

function resetScore(){
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}
document.querySelector('.js-reset-button').addEventListener('click', () => {
    resetScore();
});

document.querySelector('.js-autoplay-button').addEventListener('click', () => {
    autoPlay();
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }else if (event.key === 'a'){
        autoPlay();
    }else if (event.key === 'Backspace'){
        showResetConfirmation();
    }
});

function showResetConfirmation() {
    document.querySelector('.js-reset-confirmation')
    .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;

    document.querySelector('.js-reset-confirm-yes').addEventListener('click', () =>{
        resetScore();
        hideResetConfirmation();
    });

    document.querySelector('.js-reset-confirm-no').addEventListener('click', () =>{
        hideResetConfirmation();
    });
}

function hideResetConfirmation () {
    document.querySelector('.js-reset-confirmation')
    .innerHTML = ``;
}


function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You win') {
        score.win += 1;
    } else if (result === 'You lose') {
        score.lose += 1;
    } else if (result === 'Tie') {
        score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-choice').innerHTML = `You
    <img class="move-icon" src="/images/${playerMove}-emoji.png">
    <img class="move-icon" src="/images/${computerMove}-emoji.png">
    Computer`;
    document.querySelector('.js-result').innerHTML = result;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win} Loses: ${score.lose} Ties: ${score.tie}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}