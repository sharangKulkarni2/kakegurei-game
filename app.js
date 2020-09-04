
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let dice;
const winniningScore = 20;
let gamePlaying = true;



document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;




//dom manip
document.querySelector('.dice').style.visibility = "hidden";
document.getElementById('heading').textContent = "";



document.querySelector('.btn-roll').addEventListener("click", function () {
    // need a random num
    if (gamePlaying === false)
        return;
    dice = Math.floor(Math.random() * 6) + 1;
    //change current score
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    document.querySelector('.dice').style.visibility = "visible";
    document.getElementById('heading').textContent = "";
    // update roundscore
    if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else {
        document.getElementById('heading').textContent = "😢1 turned out, u loose ur current score!";
        nextPlayer();
    }
       

});


document.querySelector('.btn-hold').addEventListener("click", function () {
    if (gamePlaying === false)
        return;
    scores[activePlayer] += roundScore;

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= winniningScore) {
        document.querySelector('#name-' + activePlayer).textContent = "winner!";
        document.querySelector('.dice').style.visibility = "hidden";
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gamePlaying = false;
    }
    else {
        nextPlayer();
    }

});

function nextPlayer() {
    roundScore = 0;
    document.querySelector('.dice').style.visibility = "hidden";
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener("click", function () {
    gamePlaying = true;
    scores[0] = 0;
    scores[1] = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.dice').style.visibility = "hidden";
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    document.getElementById('name-0').textContent = "Player1";
    document.getElementById('name-1').textContent = "player2";
 });







