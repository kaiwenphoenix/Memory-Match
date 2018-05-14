
# Memory Match {dev-edition}
---
![Udacity logo| 20%](https://pbs.twimg.com/profile_images/877421534486315008/8wplWcXI_400x400.jpg)

**Memory Match** is a that utilizes memorization and recall. Given a deck of cards, The player will attempt to match cards with the same icon to create a match. The user will win the game once all of the cards have been matched. 

Memory Match is the second project assigned by **Udacity's Front End Nano Degree** program. 


### Game Rules

  * Flip by clicking any two cards to see if they are a match.
  * If the cards are not a match, they will return to their previously unseen state.
  * You have won the game once all cards have been matched.
  * After all cards hve been matched, you will see a "Congratulations" notification that shows your personal score as well as the time it took for you to complete the game.

### Building Memory Match
Memory Match was handcoded using HTML markup, CSS, and vanilla JavaScript. No additional libraries or frameworks were used in the creation of this program.
* The deck of cards are shuffled when the DOM loads and when the game is restarted.
* I created a timer that begins once two cards are selected.
* Animation is added for matched cards as well as animation that demonstrates when two cards are not a match.
* There is a move counter that will count the number of moves by the user.
* There is a star score rating system that automatically reduces your score once a predetermined number of moves.
* A modal was created to alert the player when the game has completed.
