/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore = {coputerScore : 0,playerScore :0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const rpschoise = ['Rock','Paper','Scissors']

    const randomNumbers =Math.floor(Math.random()*3)

    return rpschoise[randomNumbers]
  
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    
    let score;
  
    // All situations where human draws, set `score` to 0
    if (playerChoice === computerChoice) {
      score = 0
  
    
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
      score = 1
  
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      score = 1
  
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      score = 1
  
    // Otherwise human loses (aka set score to -1)
    } else {
      score = -1
    }
  
    // return score
    return score
  }

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('player-score');
  
    if (score === -1) {
      resultDiv.innerText = 'You Lose!';
    } else if (score === 1) {
      resultDiv.innerText = 'You Win!';
    } else {
      resultDiv.innerText = 'It\'s a Draw!';
    }
  
    handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
    playerScoreDiv.innerText = `Player Score: ${totalScore.playerScore}`;
  }

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const computerChoice= getComputerChoice()
    console.log({computerChoice})

    const score = getResult(playerChoice,computerChoice) 
    totalScore['playerScore'] +=score
    console.log({score})
    console.log(totalScore)
    showResult(score,playerChoice,computerChoice)
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
   rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 rpsButtons.forEach(rpsButton =>{
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
 })


  // Add a click listener to the end game button that runs the endGame() function on click
  const endgamebutton = document.getElementById('endGameButton')
  endgamebutton.onclick = () => endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore' ] =0
  totalScore['computerScore'] =0
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerscoreDiv = document.getElementById('player-score')

  resultDiv.innerText =''
  playerscoreDiv.innerText = ''
  handsDiv.innerText = ''



}

playGame()