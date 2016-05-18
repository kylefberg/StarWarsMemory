// My array of cells.
var classArray = [
  "cell0", "cell1", "cell2", "cell3", "cell4", "cell5",
  "cell0", "cell1", "cell2", "cell3", "cell4", "cell5"
];


// My board
var board = [];

var choice1;
var choice2;

var gameWon = null;

function makeBoard() {
  var shuffled = _.shuffle(classArray);
  for (var i = 0; i < 12; i++) {
    board.push(shuffled.pop());
  }
};

  // Start game, reset board, start timer
var startGame = function() {
  gameWon     = false;
  makeBoard();
  timer();
};

var winGame = function() {
  var opencell  = [""];
  var closedcell= [0, 1, 2, 3, 4, 5,
               6, 7, 8, 9, 10, 11];
};

  // reset clock
  // flip cards over
  // shuffle cards
var resetGame = function(){
  board = [];
  makeBoard();

};


// Choosing two cards.
// for (var i = 0; i <=11; i++) {
  function setChoice(index) {
    if (choice1 === undefined) {
      choice1 = index;
    }  else if (choice2 === undefined) {
      choice2 = index;
      matched(choice1, choice2);
    }
  };
// }


// Rules for match
var matched = function(var1, var2) {
  if (board[var1] === board[var2]) {
    //cards stay in place, no response after first round ends
    console.log("YAAAA!")

  } else {
    console.log("crap...");
    //starts choice function over returns cards to face down

  }
};


//Event listener for card click and flip
$('.board').on("click", ".card", function() {
  var flipped = $(this).toggleClass("flipped");
  console.log(board[this.id.substring(4)]);
  $(this).removeClass("back-red").addClass(board[this.id.substring(4)]);

 });



  // Setting up the timer with a countdown of 30 seconds
    // clearTimeout(timer, endGame);
var count=31;

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
$(startButton).on("click", startGame);
$(resetButton).on("click", resetGame);











