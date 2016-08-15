// My array of cards.
var classArray = [
  "leah", "chewie", "hans", "storm1", "luke", "storm2",
  "leah", "chewie", "hans", "storm1", "luke", "storm2"
];

// DATA MODEL
var board = [];
var choice1;
var choice2;
var isMatched;
var matchedCells = [];
var cellsToFlip = [];
var isGameWon = null;
var count;
var resetGame;
var gameOver = false;
var input = false;

function renderState() {
  console.log(
    "Choice 1:", choice1,
    "Choice 2:", choice2,
    `(${matched})`
  );
};

// Shuffling the board before each round
function makeBoard() {
  var shuffled = _.shuffle(classArray);
  for (var i = 0; i < 12; i++) {
    board.push(shuffled.pop());
  }
};

// Start game, reset board, start timer
function startGame() {
  count = 31
  timer();
  board = [];
  makeBoard();
  input = true;
  $("body").css("background-image", "url(img/space_flight.gif)");
  $("#hyperSpeed")[0].play();
};

// Reset the game (working on not a hard reset)
$("#resetButton").on("click", function () {
    window.location.reload();
});

// Choosing two cards
function setChoice(index) {
  if (choice1 === undefined) { // if choice1 is Undefined, then
    choice1 = index;
  } else { // if choice1 is defined, then
    choice2 = index;
    // compares to see if there is a match
    compareChoices();

    if (isMatched) { // if compare is a match
      console.log("Matched!");
      // add these cells to the matched cells:
      matchedCells.push(choice1);
      matchedCells.push(choice2);
      endGame();
    } else {
      console.log("Try again…");
      cellsToFlip.push(choice1);
      cellsToFlip.push(choice2);
    }
    // choice1 and choice2 become undefined
    choice1 = undefined;
    choice2 = undefined;
  }
}

// Comparing the two cards to find a match or not
function compareChoices() {
  console.log("Comparing", board[choice1], board[choice2]);
  if (board[choice1] === board[choice2]) {
    isMatched = true;
  } else {
    isMatched = false;
  }
}

// Setting up the timer with a countdown of 30 seconds
// clearTimeout(timer, endGame);
var count = 31;
var timerId;

function timer() {
  count -= 1;
  $("#timer").text(count + " sec");
  if (count <= 0) {
    endGame();
  } else {
    timerId = setTimeout(timer, 1000);
  }
};

// Event Listeners
// Start/reset game
$(startButton).on("click", startGame);

// Card click and flip
$('.board').on("click", ".card", function(evt) {
  if (input === true) {
  var cellIndex = this.id.substring(4);
  playLazer();
  }

  // Flip the card.
  if (input === true) {
  $(this).toggleClass("flipped");
  $(this).removeClass("back-red").addClass(board[cellIndex]);
  }

  // Print the card name:
  console.log(board[cellIndex]);

  // Choose the card in the model.
  setChoice(cellIndex);

  if (!isMatched) {
    // cards flip back to deck
    setTimeout(function() {
      $("#cell" + cellsToFlip[0]).removeClass().addClass("card back-red xlarge");
      $("#cell" + cellsToFlip[1]).removeClass().addClass("card back-red xlarge");
      cellsToFlip = [];
    }, 1000);
  }
});

// End of game function to declare a winner or not
function endGame() {
  if (count === 0) {
    $("#lose")[0].play();
    alert("Better Luck Next Time Padawon");
    clearTimeout(timerId);
    $('.board').off("click");
  } else if (matchedCells.length === 12) {
    clearTimeout(timerId);
    $('.board').off("click");
    $("#win")[0].play();
    alert("You Won with " + count + " seconds to spare! \n The Force is Strong in you!");
    reset();
  }
}

// Sound effects on each click
function playLazer() {
  var rnd = Math.floor(Math.random() * 4);
  $("#lazer" + rnd)[0].play();
}



