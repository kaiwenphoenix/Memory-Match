//Game Clock
//Clock Variables
let start = document.querySelector('.startClockBtn');
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let secs = 00, mins = 00;
let matches = 0;
//Clock Listener
start.addEventListener('click', begin);

//Begin Game
function begin() {
  setInterval(function() {
    secs++;
    if (secs < 10) {
      seconds.innerHTML = "0" + secs;
    } else {
      seconds.innerHTML = secs;
    }

    if (secs > 59) {
      secs = 0;
      seconds.innerHTML = "0" + secs;
      mins++;
      minutes.innerHTML = mins;
    }
  },1000)
}
//Flip Card
let cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('click', flipCard);
});

let moves = document.querySelector('.moves');
let turns = "";
let turnedCards = [];

//Matched

function flipCard(e) {
 this.classList.toggle('turn');
  turnedCards.push(this);
  console.log(turnedCards);
  if(turnedCards.length == 2) {
     cards.forEach(function(card) {
     card.classList.toggle('disable-deck');
    })
    setTimeout(checkMatch, 1500);
  }
  turns++;
  moves.innerHTML = turns;
}

function checkMatch() {
  if(turnedCards[0].innerHTML === turnedCards[1].innerHTML) {
    turnedCards.forEach(function(card) {
      card.classList.add('match');
    })
    matches++;
    if (matches === 8) {
      let elapsed = document.querySelector('.stopWatch').textContent;
      alert("Time Is " + elapsed);
    }
    setTimeout(function() {
      turnedCards[0].classList.toggle('disable');
      turnedCards[1].classList.toggle('disable');
  }, 2000);
  } else {
    turnedCards.forEach(function(card) {
      card.classList.add('mismatch');
    })
    setTimeout(function() {
      turnedCards[0].classList.toggle('turn');
      turnedCards[1].classList.toggle('turn');
      turnedCards[0].classList.remove('mismatch');
      turnedCards[1].classList.remove('mismatch');
  }, 2000);
  }
  setTimeout(function() {
    turnedCards = [];
     cards.forEach(function(card) {
      card.classList.remove('disable-deck');
    })
  }, 2100);
}
