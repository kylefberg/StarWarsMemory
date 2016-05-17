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
  // opencell    = [0, 1, 2, 3, 4, 5,
  //                6, 7, 8, 9, 10, 11];
  // closedcell  = [];

  // startGame();
};


  // reset clock
  // flip cards over
  // shuffle cards
var resetGame = function(){
  endGame     = true;
  opencell    = [];
  closedcell  = [0, 1, 2, 3, 4, 5,
                 6, 7, 8, 9, 10, 11];
  // endGame();
};


// BEHAVIOR
// $(this).toggleClass('flip');
$('.board').on("click", ".card", function() {
  $(this).toggleClass("flipped");
  var flipped = $(".flipped").not(".matched");

  if (flipped.length === 2) {
    var firstCell  = flipped.first();
    var secondCell = flipped.last();
  } else if ( firstCell.text() === secondCell.text() ) {
      firstCell.addClass("matched");
      secondCell.addClass("matched");
      ($(this).hasClass("matched"))
      return;
  } else {
      firstCell.removeClass("flipped");
      secondCell.removeClass("flipped");
      setTimeout(timer, 1000);
    }
  }
)


  // RULES TO WIN
// var gameWon = function() {
//



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
startButton.addEventListener("click", timer);
resetButton.addEventListener("click", resetGame);



// I will need to write a function connected to the click that holds the
// cards and compaires a match.

// $(.sandCrawler).on("click", function()) {
// }






