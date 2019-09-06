/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const gameWrapper = document.querySelector('#game'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),   
      message = document.querySelector('.message');

// assign min and max num to UI
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
      window.location.reload();
    }
  });

// create event listener for button 
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);

   // validate input
   if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === winningNum) {
    // game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN !!!!`);
  } else {
    // wrong number
    guessesLeft -= 1;

    // check to see if guesses left
    if(guessesLeft === 0) {
        // game over - lost
        gameOver(false, `Game Over, The correct guess was ${winningNum}`)
    } else {
        // game continue - answer wrong

        //change border color
        guessInput.style.borderColor = 'red';

        // clear input
        guessInput.value = '';

        //tell user its the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

    }
  }
});

// get random winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)+ min) ;
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    let color;
    won == true ? color = 'orange' : color = 'black';
     // disable input
     guessInput.disabled = true;
     // make border different color
     guessInput.style.borderColor = color;
     // set text color
     message.style.color = color;
     // let user know they have won
     setMessage(msg);

     //play again
     guessBtn.value = 'Play Again';
     guessBtn.className += 'play-again btn';
}