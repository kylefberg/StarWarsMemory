// My array of cells.
var classArray = [
  "cell0", "cell1", "cell2", "cell3", "cell4", "cell5",
  "cell0", "cell1", "cell2", "cell3", "cell4", "cell5"
];


// My board
var board = [];
var choice1;
var choice2;
var matched;
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
  matched = false;
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
// I need this function to repeat clearing choice 1 and 2
// when no match is found
function setChoice(index) {
  if (choice1 === undefined) {
      choice1 = index;
  } else if (choice2 === undefined) {
    choice2 = index;
    matched = match(choice1, choice2);
  } else if (choice1 !== matched && choice2 !== matched){
    $(this).removeClass(board[this.id.substring(4)]).addClass("back-red");
    } else {
      (choice1 && choice2 !== undefined);
  }
}

// for (var i = 0; i <=11; i++) {
// }


// Rules for match
var match = function(choice1, choice2) {
  if (board[choice1] === board[choice2]) {
    console.log("MATCH!")
    return true;
  } else {
    console.log("crap...");
    setTimeout(function() {

    // I need a function that when a match is not found returns card face down.
    //cards stay in place, no response after first round ends
    }, 500);
    return false;
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











