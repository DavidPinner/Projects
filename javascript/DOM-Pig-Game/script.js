/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result
 get added to his ROUND score
- BUT, if the player rolls a 1, 
all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold',
 which means that his ROUND score gets added to his GLOBAL score. 
 After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentTotal, playerScore, activePlayer, playing;


init();


// add click listener to the btn-roll
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (playing) {
        // make dice throw a random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // add random number to dice picture
        document.getElementById('dice-pink').src = 'imgs/dice-' + dice1 + '-pink.png';
        document.getElementById('dice-green').src = 'imgs/dice-' + dice2 + '-green.png';
        // show dice
        document.getElementById('dice-pink').style.display = 'block';
        document.getElementById('dice-green').style.display = 'block';


        // add dice rolls together on every roll and update current score
        if (dice1 !== 1 && dice2 !== 1) {
            currentTotal += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = currentTotal;
        } else {
            nextPlayer();
        }
    }

});

// add click listener to Button hold
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (playing) {
        // add current total to player score
        playerScore[activePlayer] += currentTotal;
        document.querySelector('#score-' + activePlayer).textContent = playerScore[activePlayer];
        // check if player has won the game
        var input = document.querySelector('.final-score').value;
        var winScore;
        if (input) {
            winScore = input;
        } else {
            winScore = 100
        }

        if (playerScore[activePlayer] >= winScore) {
            hideDice()
            document.getElementById('name-' + activePlayer).textContent = 'Winner!!!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            playing = false;
        } else {
            // next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function hideDice() {
    document.getElementById('dice-pink').style.display = 'none';
    document.getElementById('dice-green').style.display = 'none';
}

function init() {
    // reset all scores to zero
    playerScore = [0, 0]
    currentTotal = 0;
    activePlayer = 0;
    playing = true;

    // hide the dice
    hideDice()

    // update UI with reset score
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // change player names back 
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // reset classes 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};

function nextPlayer() {
    // check who active player is
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // reset current score total to zero
    currentTotal = 0;
    // make active plyers current scores zero
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // hide the dice;
    hideDice()

    // change active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

};