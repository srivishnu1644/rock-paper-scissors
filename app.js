
let playerScore = 0;
let computerScore = 0;
let draws = 0;

const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('resultText');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const drawsDisplay = document.getElementById('draws');
const resetButton = document.getElementById('resetButton');

const computerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx];
};

const updateScores = () => {
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    drawsDisplay.innerText = draws;
};

const playGame = (playerChoice) => {
    const compChoice = computerChoice();

    if (playerChoice === compChoice) {
        draws++;
        resultText.innerText = "It's a draw!";
        resultText.style.color = "blue";
    } else if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
        playerScore++;
        resultText.innerText = "Player wins!";
        resultText.style.color = "green";
    } else {
        computerScore++;
        resultText.innerText = "Computer wins!";
        resultText.style.color = "red";
    }
    updateScores();
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        playGame(playerChoice);
    });
});

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    draws = 0;
    resultText.innerText = "Make your choice!";
    resultText.style.color = "black";
    updateScores();
});


