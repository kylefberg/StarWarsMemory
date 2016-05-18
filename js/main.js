// My array of cells.
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

function renderState() {
  console.log(
    "Choice 1:", choice1,
    "Choice 2:", choice2,
    `(${matched})`
  );
};

function makeBoard() {
  var shuffled = _.shuffle(classArray);
  for (var i = 0; i < 12; i++) {
    board.push(shuffled.pop());
  }
};

// Start game, reset board, start timer
function startGame() {
  matched = false;
  makeBoard();
  timer();
};

// reset clock
// flip cards over
// shuffle cards
function resetGame(){
  board = [];
  makeBoard();
};

// Choosing two cards.
// I need this function to repeat clearing choice 1 and 2
// when no match is found
function setChoice(index) {
  if (choice1 === undefined) { // if choice1 is Undefined, then
    choice1 = index;
  } else { // if choice1 is defined, then
    choice2 = index;
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

function timer() {
  count -= 1;
  $("#timer").text(count + " sec");
  if (count <= 0) {
    return;
  } else {
    setTimeout(timer, 1000);
  }
};

// Event Listeners

// Start/reset game
$(startButton).on("click", startGame);
$(resetButton).on("click", resetGame);

// Card click and flip
$('.board').on("click", ".card", function() {
  var cellIndex = this.id.substring(4);

  // Flip the card.
  var flipped = $(this).toggleClass("flipped");
  $(this).removeClass("back-red").addClass(board[cellIndex]);

  // Print the card name:
  console.log(board[cellIndex]);

  // Choose the card in the model.
  setChoice(cellIndex);

  if (!isMatched) {
    // cards flip
    setTimeout(function() {
      $("#cell" + cellsToFlip[0]).addClass("back-red");
      $("#cell" + cellsToFlip[1]).addClass("back-red");
      cellsToFlip = [];
    }, 1200);
  }
});
function endGame() {
  if (count ===0) {
    alert("Better Luck Next Time Padawon");
  } else if (matchedCells.length === 12) {
      alert("You Won, The Force is Strong in you!");
  }
};



startGame();
