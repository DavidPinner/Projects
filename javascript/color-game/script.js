var numOfSquares, colors, colorChoice, colorSquares,
    colorDisplay, messageDisplay, newGame, modeBtn,
    h1;

numOfSquares = 6;
colors = RandomColorGenerator(numOfSquares);
colorChoice = randomNumberGenerator();

colorSquares = document.querySelectorAll('.square');
colorDisplay = document.querySelector('#color-display');
colorDisplay.textContent = colorChoice;
messageDisplay = document.getElementById('message');
newGame = document.getElementById('newGame');
modeBtn = document.querySelectorAll('.mode');
h1 = document.querySelector('h1');


init();

newGame.addEventListener('click', function() {
    reset();
})

function init() {
    modeButtons();
    squaresLoop();
    reset();
}

// loop over squares
function squaresLoop() {

    for (var i = 0; i < colorSquares.length; i++) {

        // add event listener to all squares
        colorSquares[i].addEventListener('click', function() {
            // get color of clicked square

            var clickedSquare = this.style.backgroundColor;
            if (clickedSquare === colorChoice) {
                // see if clicked square matches heading color
                squareColorChanger(clickedSquare);
                h1.style.backgroundColor = colorChoice;
                messageDisplay.textContent = 'Correct';
                newGame.textContent = 'Play Again??';

            } else {
                //change background color to colorChoice
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Incorrect';
            }
        });
    }
}
// mode buttons
function modeButtons() {

    // loop over buttons and change from easy to hard
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener('click', function() {
            // remover selected class from both buttons
            modeBtn[0].classList.remove('selected');
            modeBtn[1].classList.remove('selected');
            // add selected class back to clicked button
            this.classList.add('selected');
            if (this.textContent === 'Easy') {
                numOfSquares = 3;
            } else {
                numOfSquares = 6
            }
            reset();

        });
    };
}

// change the color of all squares when guess correct
function squareColorChanger(color) {
    // loop through all squares
    for (var i = 0; i < colorSquares.length; i++) {
        // change colors to match colorChoice
        colorSquares[i].style.backgroundColor = color;
    }
}


function reset() {
    // get new colour choice
    colors = RandomColorGenerator(numOfSquares);
    // choose new random color
    colorChoice = randomNumberGenerator()

    // random color squares 
    randomColorSquares();
    // reset h1 background color
    h1.style.backgroundColor = 'steelblue';
    // reset value back to new game
    messageDisplay.textContent = ' ';
    newGame.textContent = 'New Game';
}

function randomColorSquares() {
    for (var i = 0; i < colorSquares.length; i++) {
        // change colors to match colorChoice
        if (colors[i]) {
            colorSquares[i].style.display = 'block';
            colorSquares[i].style.backgroundColor = colors[i];
        } else {
            colorSquares[i].style.display = 'none';
        }

    }
}
//  pick a random number from the array to guess 
function randomNumberGenerator() {
    var ranNum = Math.floor(Math.random() * colors.length)
    return colors[ranNum];
}

function RandomColorGenerator(num) {
    // make arr to store the random numbers
    var arr = []
        // loop through num
    for (var i = 0; i < num; i++) {
        // add random numbers to the array  
        arr.push(randomColor());
    }
    // return random numbers to array
    return arr;
}

function randomColor() {
    // pick a random number got r g b
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// btnEasy.addEventListener('click', function() {

//     numOfSquares = 3;
//     colors = RandomColorGenerator(numOfSquares);
//     colorChoice = randomNumberGenerator();
//     colorDisplay.textContent = colorChoice;
//     btnEasy.classList.add('selected');
//     btnHard.classList.remove('selected');
//     messageDisplay.textContent = ' ';
//     for (var i = 0; i < colorSquares.length; i++) {
//         if (colors[i]) {
//             colorSquares[i].style.backgroundColor = colors[i]
//         } else {
//             colorSquares[i].style.display = 'none';
//         }
//     }
// });
// btnHard.addEventListener('click', function() {
//     numOfSquares = 6;
//     btnHard.classList.add('selected');
//     btnEasy.classList.remove('selected');
//     colors = RandomColorGenerator(numOfSquares);
//     colorChoice = randomNumberGenerator();
//     colorDisplay.textContent = colorChoice;
//     messageDisplay.textContent = ' ';
//     for (var i = 0; i < colorSquares.length; i++) {
//         colorSquares[i].style.backgroundColor = colors[i]
//         colorSquares[i].style.display = 'block';
//     }
// });