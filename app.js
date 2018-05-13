//Game Variables
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
let newGame = document.querySelector('#newGame');
let canvas = document.querySelector('.deck');
let shuffledDeck = [];
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.closeModal');
// Game Listeners
newGame.addEventListener('click', startGame);
cards.forEach(function(card) {
  card.addEventListener('click', flipCard);
});
closeModal.addEventListener('click', exit);

// Begin Game
document.body.onload = startGame();

function startGame() {
  turns = 0;
  secs = 00;
  mins = 00;
  seconds.innerHTML = "0" + secs;
  minutes.innerHTML = mins;
  moves.innerHTML = 0;
  clearInterval(clock);

  cardCollection = shuffle(cardCollection);
  for (var i = 0; i < cards.length; i++) {
    cardCollection.forEach(function(card) {
      canvas.appendChild(card);

    });
    cardCollection[i].classList.remove("turn", "match", "disable")
  }
}
// Shuffle Cards
function shuffle(array) {
  console.log("shuffle");
  var currentIndex = array.length,
    temporaryValue, randomIndex;

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

//Init Game
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

//Flip Cards

function flipCard(e) {
  //Begin Clock

  //Turn Card
  this.classList.toggle('turn');
  //Push turned card to tunedCard array
  turnedCards.push(this);
  //If there are 2 turned cards add turn to moves
  if (turnedCards.length == 2) {
    turns++;
    if ((turns == 1) && (secs === 0) && (mins === 0)) {
      begin();
    }
  //Disable deck to prevent additional clicks
    cards.forEach(function(card) {
      card.classList.toggle('disable-deck');
    })
    setTimeout(checkMatch, 1500);
  }
  //Set number of moves
  moves.innerHTML = turns;
}


//Check to see if cards are a match
function checkMatch() {
  if (turnedCards[0].innerHTML === turnedCards[1].innerHTML) {
    turnedCards.forEach(function(card) {
      card.classList.add('match');
      matches++;
    })


    //Disables matched cards
    setTimeout(function() {
      turnedCards[0].classList.toggle('disable');
      turnedCards[1].classList.toggle('disable');
    }, 2000);
  } else {
    //Add mismatch animation
    turnedCards.forEach(function(card) {
      card.classList.add('mismatch');
    })
    //Removes classes from mismatched cards
    setTimeout(function() {
      turnedCards[0].classList.toggle('turn');
      turnedCards[1].classList.toggle('turn');
      turnedCards[0].classList.remove('mismatch');
      turnedCards[1].classList.remove('mismatch');
    }, 2000);
  }
  //Resets turnedCards to empty array
  setTimeout(function() {
    turnedCards = [];
    //Re-enables deck for next turn
    cards.forEach(function(card) {
      card.classList.remove('disable-deck');
    })
  }, 2100);
}

//Check to see if game is complete
if (matches == 8) {
  congrats();
}
function congrats() {
  modal.style.display = "block";
}
function exit() {
  modal.style.display = "none";
}
// Stars display
