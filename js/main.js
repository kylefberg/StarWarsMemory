
  // start clock
  // make cards clickable
var startGame = function() {
  gameWon     = false;
  openJawa    = [0, 1, 2, 3, 4, 5,
                 6, 7, 8, 9, 10, 11];
  closedJawa  = [];
  jawas       = undefined;

  startGame();
};


  // reset clock
  // flip cards over
  // shuffle cards
var resetGame = function(){
  endGame     = true;
  openJawas   = [];
  closedJawas = [0, 1, 2, 3, 4, 5,
                 6, 7, 8, 9, 10, 11];
  endGame();
};

// BEHAVIOR
var move = function(sandCrawlerIndex) {
  sandCrawler[jawaIndex] = currentPlayer;

};

  // RULES TO WIN
var gameWon = function() {
  if ("hansSolo") === ("hansSolo") {
    hold in open position, start new round;
      else turn back over and start new round;
    }




  // Setting up the timer with a countdown of 30 seconds
  // Trying to write code that makes the countdown start on
  // the start click.
// $(function() {
  // });
var count=31;

function timer() {
  count -= 1;
  $("#timer").text(count + " sec");
  if (count <= 0) {
    // clearTimeout(timer, endGame);
    return;
  } else {
    setTimeout(timer, 1000);
  }
};



// My array of jawas.
var classArray = [
  "jawa0", "jawa1", "jawa2", "jawa3", "jawa4", "jawa5",];

// My board
var sandCrawler = [null, null, null, null, null, null, null, null, null, null, null, null];


// Event Listeners
startButton.addEventListener("click", timer);
resetButton.addEventListener("click", resetGame);



// I will need to write a function connected to the click that holds the
// cards and compaires a match.

// $(.sandCrawler).on("click", function()) {
// $(this).toggleClass('flip');
// }





// var sandCrawler = document.querySelectorAll("jawa");
// jawa[0].addEventListener("click");
// jawa[1].addEventListener("click");
// jawa[2].addEventListener("click");
// jawa[3].addEventListener("click");
// jawa[4].addEventListener("click");
// jawa[5].addEventListener("click");
// jawa[6].addEventListener("click");
// jawa[7].addEventListener("click");
// jawa[8].addEventListener("click");
// jawa[9].addEventListener("click");




