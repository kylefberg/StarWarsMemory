
var startGame = function(){
  // start clock
  // make cards clickable

}

var resetGame = function(){
  // reset clock
  // flip cards over
  // shuffle cards
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
}


// var countdown = {
//   count: 30,
//   timerId: null,
//   start: function() {
//     this.timerId = setInterval(()) => {
//       this.count--;
//       console.log(this.count);
//     }, 1000);
//   },
//   stop: function() {
//     console.log(this);
//     clearInterval(this.timerId);
//   }
// };

// My array of jawas.
var sandCrawler = [
  "jawa0", "jawa1", "jawa2", "jawa3", "jawa4", "jawa5", "jawa6"];


var board = [null, null, null, null, null, null, null, null, null, null, null, null]; {
  fipped: false;
  className: "jawa0";
}

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




