const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const message = document.getElementById("message");
const userResult = document.getElementById("userResult");
const computerResult = document.getElementById("computerResult");
const resetScore = document.getElementById("reset");
let userScore = 0;
let computerScore = 0;

function getComputerPick () {
	const picks = ["Rock", "Paper", "Scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	console.log(picks[randomNumber]);
	return picks[randomNumber];
}

function userPick(pick) {
	console.log(pick);
	const computerPick = getComputerPick();
	switch (pick + computerPick) {
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
			userScore += 1;
			userResult.innerHTML = userScore;
			message.innerHTML = `You picked ${pick} and beat computers ${computerPick} pick!!!`;
			break;
		case "ScissorsPaper":
		case "RockPaper":
		case "PaperRock":
			computerScore += 1;
			computerResult.innerHTML = computerScore;
			message.innerHTML = `You picked ${pick} and lost to computers ${computerPick} pick!!!`;
			break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
			message.innerHTML = `It's a draw!`;
			break;
	}
}

reset.addEventListener("click", function(){
  	userScore = 0;
	computerScore = 0;
	computerResult.innerHTML = computerScore;
	userResult.innerHTML = userScore;
	message.innerHTML = `Rock beats scissors, paper beats rock and scissors beat rock.`;
});

rock.addEventListener("click", function(){
  	userPick("Rock");
});

paper.addEventListener("click", function(){
  	userPick("Paper");
});

scissors.addEventListener("click", function(){
  	userPick("Scissors");
});

//logika radi, dodati brojac jos i promjenu teksta i gg wp