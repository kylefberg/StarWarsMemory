
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
function timer() {
  count=count -1;
  if (count <= -1) {
    clearTimeout(timer, endGame);
    return;
  }
  document.getElementById("timer").innerHTML=count + " sec";
}

var count=31;
var counter=setInterval(timer, 1000);



// My array of jawas.
var sandCrawler = [
  "jawa0", "jawa1", "jawa2", "jawa3", "jawa4",
  "jawa5", "jawa6", "jawa7", "jawa8", "jawa9",];



// Event Listeners
startButton.addEventListener("click", startGame);

resetButton.addEventListener("click", resetGame);

// var jawa = document.querySelectorAll("jawa");
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




