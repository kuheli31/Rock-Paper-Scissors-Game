let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
};

const drawGame = () => {
    console.log("It's a Draw match!");
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "orange";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!🎊");
        msg.innerText = "You win!🎊";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer wins!🤩 Better luck next time!🤪");
        msg.innerText = "Computer wins!🤩 Better luck next time!🤪";
        msg.style.backgroundColor = "skyblue";
    }
};

const playGame = (userChoice) => {
    console.log("User choice is =", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer choice is =", compChoice);

    // Check who wins
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // Scissor, paper
            if (compChoice === "scissors") {
                userWin = true;
            } else {
                userWin = false;
            }
        } else if (userChoice === "paper") {
            // Rock, scissor
            if (compChoice === "rock") {
                userWin = true;
            } else {
                userWin = false;
            }
        } else {
            // Paper, rock
            if (compChoice === "paper") {
                userWin = true;
            } else {
                userWin = false;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
