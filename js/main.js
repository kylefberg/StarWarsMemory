// My array of cells.
var classArray = [
  "leah", "chewie", "hans", "storm1", "luke", "storm2",
  "leah", "chewie", "hans", "storm1", "luke", "storm2"
];

// DATA MODEL
var board = [];
var choice1;
var choice2;
var matched;
var matchedCells = [];
// var unmatchedCells = [];
var gameWon = null;

var renderState = function() {
  console.log(
    "Choice 1:", choice1,
    "Choice 2:", choice2,
    `(${matched})`
  );
};

var makeBoard = function() {
  var shuffled = _.shuffle(classArray);
  for (var i = 0; i < 12; i++) {
    board.push(shuffled.pop());
  }
};

// Start game, reset board, start timer
var startGame = function() {
  gameWon = false;
  matched = false;
  makeBoard();
  timer();
};

// var winGame = function() {
//   opencell  = [];
//   closedcell= [0, 1, 2, 3, 4, 5,
//                6, 7, 8, 9, 10, 11];
// };

// reset clock
// flip cards over
// shuffle cards
var resetGame = function(){
  board = [];
  makeBoard();
};

// Choosing two cards.
// I need this function to repeat clearing choice 1 and 2
// when no match is found
var setChoice = function(index) {
  if (choice1 === undefined) { // if choice1 is UNdefined, then
    choice1 = index;
  } else { // if choice1 is defined, then
    choice2 = index;
    compareChoices();

    if (matched) { // if compare is a match
      console.log("Matched!");
      // add these cells to the matched cells:
      matchedCells.push(choice1);
      matchedCells.push(choice2);
    } else {
      console.log("Try again…");
    }

    // choice1 and choice2 become undefined
    choice1 = undefined;
    choice2 = undefined;
  }
}

var compareChoices = function() {
  console.log("Comparing", board[choice1], board[choice2]);
  if (board[choice1] === board[choice2]) {
    matched = true;
  } else {
    matched = false;
  }
}

// Setting up the timer with a countdown of 30 seconds
// clearTimeout(timer, endGame);
var count = 31;

var timer = function() {
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
  var flipped = $(this).toggleClass("flipped");
  console.log(board[this.id.substring(4)]);
  $(this).removeClass("back-red").addClass(board[this.id.substring(4)]);
});
