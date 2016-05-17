// My array of jawas.
var classArray = [
  "cell0", "cell1", "cell2", "cell3", "cell4", "cell5",
  "cell0", "cell1", "cell2", "cell3", "cell4", "cell5"
];


// My board
var board = [];

var gameWon = null;

function makeBoard() {
  var shuffled = _.shuffle(classArray);
  for (var i = 0; i < 12; i++) {
    board.push(shuffled.pop());
  }
}

  // start clock
  // make cards clickable
var startGame = function() {
  gameWon     = false;
  makeBoard();
};

var winGame = function() {
  var opencell  = [""];
  var closedcell= [0, 1, 2, 3, 4, 5,
               6, 7, 8, 9, 10, 11];
}

  // reset clock
  // flip cards over
  // shuffle cards
var resetGame = function(){
  board = [];
  makeBoard();

};


// BEHAVIOR
// $(this).toggleClass('flip');


$('.board').on("click", ".card", function() {
  var flipped = $(this).toggleClass("flipped");
  console.log(board[this.id.substring(4)]);
  $(this).removeClass("back-red").addClass(board[this.id.substring(4)]);

// Var rules on if two selected cards match + no other cards can be selected
  var match = function() {
    if (board[this.id.substring(4)].is(board[this.id.subtring(4)])) {
      $.addClass("match");
    } else {
      return;
    }
  }
});



  // Setting up the timer with a countdown of 30 seconds
    // clearTimeout(timer, endGame);
var count=31;

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
$(startButton).on("click", timer);
$(resetButton).on("click", resetGame);











