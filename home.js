// challenge 1: Age
function ageInDays() {
   var birthYear = prompt("In what year did you born?");
   var ageInDayss = (2020 - birthYear) * 365;
   var textAnswer = document.createTextNode("Your age is " + ageInDayss + " Days old.");
   var h1 = document.createElement('h1');

   h1.setAttribute("id", "flex-box-result");
   h1.setAttribute("class", "btn btn-warning")
   h1.appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
   document.getElementById('flex-box-result').remove();
}

//Challenge no. 2: Cat

function catGenerator() {
   var image = document.createElement('img');
   //image.setAttribute("src", "images/cat.gif");
   image.setAttribute("onclick", "resetCat()");
   //image.setAttribute("id", "cat-reset");
   image.setAttribute("width", "20%");

   image.src = "images/cat.gif";
   //image.onclick="resetCat()";
   image.id = "cat-reset";
   //image.width='20%';
   document.getElementById('flex-cat-gen').appendChild(image);
   console.log(image);
}

function resetCat() {
   document.getElementById('cat-reset').remove();
}

//Challenge no. 3: Rock Paper Scissors

function rpsGame(yourChoice) {

   var humanChoice = yourChoice.id;
   var botChoice = botChooses(randNumToChoose());
   var results = decideWinner(humanChoice, botChoice);
   var rmessage = finalMessage(results);
   finalOutput(humanChoice, botChoice, rmessage);
   console.log(botChoice, results, rmessage);


}

function randNumToChoose() {
   return Math.floor(Math.random() * 3);
}

function botChooses(randomNumber) {
   return ['rock', 'paper', 'scissors'][randomNumber];
}

function decideWinner(humanChoice, botChoice) {
   var rpsDatabase = {
      'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
      'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
      'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
   };

   var humanScore = rpsDatabase[humanChoice][botChoice];
   var computerScore = rpsDatabase[botChoice][humanChoice];

   return [humanScore, computerScore];

}

function finalMessage([humanScore, botScore]) {
   if (humanScore === 0)
      return { 'message': 'You Lost!!', 'color': 'red' };
   else if (humanScore === 0.5)
      return { 'message': 'Match Tied !!', 'color': 'yellow' };
   else
      return { 'message': 'You won !!', 'color': 'green' };
}

function finalOutput(humanChoice, botChoice, fmessage) {

   var rpsDatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src
   };

   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();

   var humanDiv = document.createElement("div");
   var botDiv = document.createElement("div");
   var fmessageDiv = document.createElement("div");

   humanDiv.innerHTML = "<h3>Your choice<br></h3><img src = '" + rpsDatabase[humanChoice] + " ' width = '200px' length='250px'>";
   fmessageDiv.innerHTML = "<h1 style=' color: " + fmessage['color'] + ";font-size:100px;padding:20px'> " + fmessage['message'] + "</h1>";
   botDiv.innerHTML = "<h3>Computer choice<br></h3><br></h3><img src = '" + rpsDatabase[botChoice] + " ' width = '200px' length='250px'>";

   document.getElementById('flex-box-rps').appendChild(humanDiv);
   document.getElementById('flex-box-rps').appendChild(fmessageDiv);
   document.getElementById('flex-box-rps').appendChild(botDiv);




}

document.querySelector('#rps-reset').addEventListener('click', rpsGameReset);

function rpsGameReset() {
   var remove = document.getElementById('flex-box-rps');

   while (remove.hasChildNodes()) {
      remove.removeChild(remove.lastChild);
   }
   var rock = document.createElement('img');
   var paper = document.createElement('img');
   var scissors = document.createElement('img');

   console.log(rock);
   console.log(paper);
   console.log(scissors);

   rock.src = 'images/rock.jpg';
   paper.src = 'images/paper.jpg';
   scissors.src = 'images/scissors.jpg';

   rock.setAttribute("length", "250px");
   rock.setAttribute("width", "200px");
   paper.setAttribute("length", "250px");
   paper.setAttribute("width", "200px");
   scissors.setAttribute("length", "250px");
   scissors.setAttribute("width", "200px");
   rock.setAttribute("onclick", "rpsGame(this)");
   paper.setAttribute("onclick", "rpsGame(this)");
   scissors.setAttribute("onclick", "rpsGame(this)");

   rock.id = "rock";
   paper.id = "paper";
   scissors.id = "scissors";

   document.getElementById('flex-box-rps').appendChild(rock);
   document.getElementById('flex-box-rps').appendChild(paper);
   document.getElementById('flex-box-rps').appendChild(scissors);

   console.log(rock);
   console.log(paper);
   console.log(scissors);
}

//Challenge no.4: Color changing buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
   copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(thingy) {
   if (thingy.value === 'red')
      buttonRed();
   else if (thingy.value === 'green')
      buttonGreen();
   else if (thingy.value === 'random')
      buttonRandom();
   else if (thingy.value === 'reset')
      buttonReset();
}

function buttonRed() {
   for (let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add('btn-danger');

   }
}

function buttonGreen() {
   for (let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add('btn-success');

   }
}

function buttonReset() {
   for (let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(copyAllButtons[i]);

   }
}

function buttonRandom() {
   var choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success']

   for (let i = 0; i < all_buttons.length; i++) {
      var selection = Math.floor(Math.random() * 4);
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(choices[selection]);

   }
}

//Challenge no. 5: Blackjack

let blackjackGame = {
   'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
   'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
   'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
   'suit': ['C', 'S', 'D', 'H'],
   'cardsmap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11] },
   'isstand': false,
   'isturnsover': false,
   'firsttwo': 1,

};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const CARDS = blackjackGame['cards'];
const SUIT = blackjackGame['suit'];
const CARDSMAP = blackjackGame['cardsmap'];
const HITSOUND = new Audio('sounds/swish.m4a');
const WINSOUND = new Audio('sounds/cash.mp3');
const LOSESOUND = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerGame);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {

   if (blackjackGame['isstand'] === false) {
      var randomCard1 = randomCard();
      var randomSuit1 = randomSuit();
      showCards(YOU, randomCard1, randomSuit1);
      updateScore(randomCard1, YOU);
      showScore(YOU);
      if (blackjackGame['score'] > 21) {
         showResult(computeWinner());
      }

   }


      if (blackjackGame['isstand'] === false && blackjackGame['firsttwo'] != 0) {
         var randomCard1 = randomCard();
         var randomSuit1 = randomSuit();
         showCards(YOU, randomCard1, randomSuit1);
         updateScore(randomCard1, YOU);
         showScore(YOU);
         blackjackGame['firsttwo']--;
         if (blackjackGame['score'] === 21) {
            showResult(computeWinner());
         }
      }




   }

   function showCards(activePlayer, randomCardReceived, randomSuitReceived) {

      if (activePlayer['score'] < 21) {
         var cards = document.createElement('img');
         cards.src = 'images/cards/' + randomCardReceived + randomSuitReceived + '.jpg';
         document.querySelector(activePlayer['div']).appendChild(cards);
         HITSOUND.play();
      }

   }

   function blackjackDeal() {
      var yourImages = document.querySelector(YOU['div']).querySelectorAll('img');
      var dealerImages = document.querySelector(DEALER['div']).querySelectorAll('img');

      for (i = 0; i < yourImages.length; i++) {
         yourImages[i].remove();
      }
      for (i = 0; i < dealerImages.length; i++) {
         dealerImages[i].remove();
      }

      YOU['score'] = 0;
      DEALER['score'] = 0;

      document.querySelector(YOU['scoreSpan']).textContent = 0;
      document.querySelector(YOU['scoreSpan']).style.color = 'white';
      document.querySelector(DEALER['scoreSpan']).style.color = 'white';
      document.querySelector(DEALER['scoreSpan']).textContent = '0';
      document.querySelector("#blackjack-result").textContent = "Let's play";
      document.querySelector("#blackjack-result").style.color = 'black';
      blackjackGame['isstand'] = false;
      blackjackGame['isturnsover'] = false;
      blackjackGame['firsttwo'] = 1;
   }

   function randomCard() {
      var randomNumber = Math.floor(Math.random() * 13);
      return CARDS[randomNumber];
   }
   function randomSuit() {
      var randomNumber = Math.floor(Math.random() * 4);
      return SUIT[randomNumber];
   }

   function updateScore(card, activePlayer) {
      if (card === 'A') {
         if (activePlayer['score'] + blackjackGame['cardsmap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsmap'][card][1];
         } else {
            activePlayer['score'] += blackjackGame['cardsmap'][card][0];
         }
      } else {
         activePlayer['score'] += blackjackGame['cardsmap'][card];
      }
   }

   function showScore(activePlayer) {
      if (activePlayer['score'] > 21) {
         document.querySelector(activePlayer['scoreSpan']).textContent = 'BUSTED!!';
         document.querySelector(activePlayer['scoreSpan']).style.color = 'red';

      } else {

         document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
         console.log(activePlayer['score']);
      }
   }

   function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

   async function dealerGame() {
      // while(DEALER['score']<22)
      blackjackGame['isstand'] = true;

      while (DEALER['score'] <= 21 && blackjackGame['isturnsover'] == false) {

         let card = randomCard();
         let suit = randomSuit();
         showCards(DEALER, card, suit);
         updateScore(card, DEALER);
         showScore(DEALER);
         await sleep(1000);

      };

      blackjackGame['isturnsover'] = true;
      showResult(computeWinner());
   }

   function computeWinner() {
      let winner;

      if (YOU['score'] <= 21) {
         if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            console.log("You Won");
            winner = YOU;
         } else if (YOU['score'] < DEALER['score']) {
            console.log("You Lose");
            winner = DEALER;
         } else {
            console.log("Match Drew");
         }

      } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
         console.log("You Lose");
         winner = DEALER;
      } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
         console.log("Match Drew");
      }

      console.log("winner is", winner);
      return winner;

   }

   function showResult(winner) {
      var message;
      var messageColor;

      if (winner === YOU) {
         message = 'YOU WON!!';
         messageColor = 'green';
         WINSOUND.play();
         console.log(message);
         document.querySelector('#blackjack-won').textContent++;

      }

      else if (winner === DEALER) {
         message = 'YOU LOSE!!';
         messageColor = 'red';
         LOSESOUND.play();
         console.log(message);
         document.querySelector('#blackjack-lost').textContent++;
      }

      else {
         message = "MATCH DREW!!";
         messageColor = 'yellow';
         console.log(message);
         document.querySelector('#blackjack-draw').textContent++;
      }

      document.querySelector("#blackjack-result").textContent = message;
      document.querySelector("#blackjack-result").style.color = messageColor;


   }

