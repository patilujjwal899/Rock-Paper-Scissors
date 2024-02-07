//object defining for count of wins,looses,ties
let score = JSON.parse(localStorage.getItem('score')) //converting JSON string into object using JSON.parse()

//this is done because when we reset the score localStorage have value null so we manually sets score's value
if(score === null){ 
  score = {
    wins: 0,
    losses:0,
    ties: 0,
  }; 
}


updateScoreElement();



//function defined for Resetting score
function resetCount() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-score')
      .innerHTML = `wins: ${score.wins}, looses: ${score.losses}, ties: ${score.ties}`;
    
} 
 
//function defined for playGame
function playGame(playerMove) {
  const computerMove = pickComputerMove();  //function call of pickComputerMove

  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "you loose";
    } else if (computerMove === "Paper") {
      result = "you won";
    } else if (computerMove === "Scissors") {
      result = "Game tied";
    }
  } 
  else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "you won";
    } else if (computerMove === "Paper") {
      result = "Game tied";
    } else if (computerMove === "Scissors") {
      result = "you loose";
    }
  } 
  else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Game tied";
    } else if (computerMove === "Paper") {
      result = "you loose";
    } else if (computerMoves === "Scissors") {
      result = "you won";
    }
  }


  if(result === "you won"){
    score.wins += 1;
  }
  else if(result === "you loose"){
    score.losses += 1;
  }
  else if(result === "Game tied"){
    score.ties += 1;
  }

  //storing the result in localStorage
  //localStorage accepts only string so we converted the score object in JSON string format
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You 
                 <img src="./${playerMove}-emoji.png"
                 class="icon">
                 Computer 
                 <img src="./${computerMove}-emoji.png"
                 class="icon">`;

}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = ` wins: ${score.wins}, looses: ${score.losses}, ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
