//They are defined with const keyword as they'll showup on first page load and will never change 
const holes= document.querySelectorAll('.hole');
const scoreBoard= document.querySelectorAll('.score');
const moles= document.querySelectorAll('.mole');
const countdownBoard= document.querySelectorAll('.countdown');
const startButton= document.querySelectorAll('.startButton');

//they use let as there values will be dynamically changed 
let lastHole;
let timeUp = false;
let timeLimit= 20000;
let score = 0;
let countdown;

function pickRandomHole(holes){
    const randomHole= Math.floor(Math.random()* holes.length);
    const hole = holes[randomHole];
    //To make second number different from previous number, we'll put this statement.
    if(hole === lastHole){
        //return keyword will end this funtion execution and it will call itself again to pick a random number
        return pickRandomHole(holes);
    }
    // if we did not pick the same number then 
    lastHole= hole;
    return hole;
}

// This funtion will choose random time this will animate the mole up and down 
function popOut(){
    //picking up random time
    const time= Math.random()*1300 +400;
    //this hole var is new and independent from above hole variable
    const hole = pickRandomHole(holes);
    //CSS will animate its child animate with class mole(.hole.up .mole) it will animate its top value from 0 to 100
    hole.classList.add('up');
    
    // this will make a mole to slice down at a random time
    setTimeout(function(){
        hole.classList.remove('up');
        //if time out is false call popout again, to show another mole at a different hole, which means if a person is able to hit the mole at a random time(calculated above) then call popout function again else end the game.
        if(!timeUp) popOut();
    }, time);
}

popOut();