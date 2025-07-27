const score = JSON.parse(localStorage.getItem('score')) || {
																															Wins: 0,
																															Losses: 0,
																															Ties: 0
																														}

updateScoreElem();

function playGame(playerMove) {
	const computerMove = pickComputerMove();
	let result = '';

	if (playerMove === 'rock') {
		if (computerMove === 'rock') {
			result = 'Tie';
		} else if (computerMove === 'paper') {
			result = 'You Lose';
		} else if (computerMove === 'scissors') {
			result = 'You Win';
		}
	} else if (playerMove === 'paper') {
		if (computerMove === 'rock') {
			result = 'You Win';
		} else if (computerMove === 'paper') {
			result = 'Tie';
		} else if (computerMove === 'scissors') {
			result = 'You Lose';
		}
	} else if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			result = 'You Lose';
		} else if (computerMove === 'paper') {
			result = 'You Win';
		} else if (computerMove === 'scissors') {
			result = 'Tie';
		}
	}

	if (result === 'You Win') {
		score.Wins += 1;
	} else if (result === 'You Lose') {
		score.Losses += 1;
	} else if (result === 'Tie') {
		score.Ties += 1;
	}

	localStorage.setItem('score', JSON.stringify(score));

	updateScoreElem();

	document.querySelector('.js-result').innerHTML = result;
	document.querySelector('.js-moves')
		.innerHTML = `You<img class="image" src="${playerMove}-emoji.png">
	<img class="image" src="${computerMove}-emoji.png">Computer
	`;

}

function updateScoreElem() {
	document.querySelector('.js-score').innerHTML = `<b>Your Score</b> ------ <b>Wins</b> : ${score.Wins} , <b>Losses</b> : ${score.Losses} , <b>Ties</b> : ${score.Ties}`;
}



function pickComputerMove () {
	const x = Math.random();
	let computerMove = '';

	if (x >= 0 && x < 1/3) {
		computerMove = 'rock';
	} else if (x >= 1/3 && x < 2/3) {
		computerMove = 'paper';
	} else if (x >= 2/3 && x < 1) {
		computerMove = 'scissors';
	}

	return computerMove;

}
