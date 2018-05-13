//Game Clock
//Clock Variables
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let secs = 00,
  mins = 00;
let matches = 0;
let cards = document.querySelectorAll('.card');
let cardCollection = [...cards];
let moves = document.querySelector('.moves');
let turns = 0;
let turnedCards = [];
//New Game Listener
let newGame = document.querySelector('#newGame');
let canvas = document.querySelector('.deck');
let shuffledDeck = [];
document.body.onload = startGame();
newGame.addEventListener('click', startGame);
function startGame() {
  turns = 0;
  secs = 00;
  mins = 00;
  seconds.innerHTML = "0" + secs;
  minutes.innerHTML = mins;
  clearInterval(clock);

  cardCollection = shuffle(cardCollection);
  for (var i = 0; i < cards.length; i++) {
    cardCollection.forEach(function(card) {
      canvas.appendChild(card);

    });
    cardCollection[i].classList.remove("turn", "match", "disable")
  }
}

function shuffle(array) {
  console.log("shuffle");
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
console.log(array);
    return array;
};

//Begin Game
var clock;
function begin() {
  clock = setInterval(function() {
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
  }, 1000)
}
//Flip Card

cards.forEach(function(card) {
  card.addEventListener('click', flipCard);
});



//Matched

function flipCard(e) {
  if ((turns == 1) && (secs === 00) && (mins === 00)){
    begin();
  }
  this.classList.toggle('turn');
  turnedCards.push(this);
  console.log(turnedCards);
  if (turnedCards.length == 2) {
      turns++;
    cards.forEach(function(card) {
      card.classList.toggle('disable-deck');
    })
    setTimeout(checkMatch, 1500);
  }
  moves.innerHTML = turns;
}

function checkMatch() {
  if (turnedCards[0].innerHTML === turnedCards[1].innerHTML) {
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
