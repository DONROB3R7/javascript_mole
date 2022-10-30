// Globals Variables Declarestion 

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

// Set the timer for a game of whac a mole 
let result =  0;
let hitPosition;
let currentTime = 60;
let timerId = null;


// Select a random spot square where a mole to appper 
function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    });
    
    let randomSquare  = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}


// Points for each time when you clikc the mole
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id === hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

// Level of speed for a mole.
function moveMole(){
    timerId = setInterval(randomSquare, 500);
}



moveMole();


/// Timer function 
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    console.log(currentTime);
    if(currentTime == 0){
        clearInterval(countDownTimeId);
        clearInterval(timerId);
        alert('Game over! Your final score is' + result);
    }
}

let countDownTimeId = setInterval(countDown, 1000);