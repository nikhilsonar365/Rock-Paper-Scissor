let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".hand");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
}

const drawGame = () => {
    msg.innerText = "Game Was Draw, Play Again.";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoise, compChoise) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoise} beats  your ${userChoise}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userChoise) => {
    const compChoise = genCompChoice();

    if (userChoise === compChoise) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoise === "rock") {
            userWin = compChoise === "paper" ? false : true;   
        } else if(userChoise === "paper") {
            userWin = compChoise === "scissors" ? false : true;   
        } else {
            userWin = compChoise === "rock" ? false : true;   
        }
        showWinner(userWin, userChoise, compChoise);
    }
}

choices.forEach((hand) => {
    hand.addEventListener("click", () => {
        const userChoise = hand.getAttribute("id");
        playGame(userChoise);
    })
})