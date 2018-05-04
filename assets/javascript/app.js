

// Create 10 multiple choice q's and answer's in which you can only choose one.

// At the end click finish

// when finish is clicked, it stops the timer.

// when finished is clicked, you can see your score.

// create a score board of what your score is:
//// score how many you got wrong, right, and how many q's you had left.

// reset quiz / OR / play again button.


//// Create a Start button that starts the timer when clicked

var number = 10; // 1 minute, this is your set time in seconds.

var intervalId; // reusable variable

$("#start").on("click", run); // start button link

$("#stop").on("click", stop); // stop button link

function run() {
  intervalId = setInterval(decrement, 1000); // decrements every 1 millisecond.
  $("#start").hide()
}

function decrement() {

// function to decrement timer when started

  number--;

  $("#show-number").html("<h2>" + "You have " + number + " seconds left!" + "</h2>"); 
  // when start is clicked text appears

  if (number === 0) {

// when the number hits 0, the timer will run through the function and stop.

    stop();

    // alert("Times Up!");
    $("#show-number").html("<h2>" + "Times up!" + "</h2>");
  }
}

function stop() {

  clearInterval(intervalId); // clears interval when the timer ends
}


//////

// Trivia Questions
// Radio buttons are used for singular choice amongst multiple questions

// checking the status of the answers in the trivia

// op: make all the questions dynamically generated after clicking start, then have them clear after you click finish

// when the timer is up .empty() the page and display the counter results.

// .hide() the div to hide the start button on the front page 

// question 1:

function hello (check){

  var q1 = document.trivia-qs.q1.value;
  var q2 = document.trivia-qs.q2.value;
  var q3 = document.trivia-qs.q3.value;
  var q4 = document.trivia-qs.q4.value;
  var q5 = document.trivia-qs.q5.value;
  var q6 = document.trivia-qs.q6.value;
  var q7 = document.trivia-qs.q7.value;
  var q8 = document.trivia-qs.q8.value;
  var q9 = document.trivia-qs.q9.value;
  var q10 = document.trivia-qs.q10.value;
  var correct = 0;
  var wrong = 0;


  if(q1 === "Coconut Water"){
    correct++;
  }
  if(q2 === "Cayenne Peppers"){
    correct++;
  }
  if(q3 === "Chocolate"){
    correct++;
  }
  if(q4 === "Honey"){
    correct++;
  }
  if(q5 === "Reindeer Fat"){
    correct++;
  }
  if(q6 === "Beetles"){
    correct++;
  }
  if(q7 === "Apples"){
    correct++;
  }
  if(q8 === "Termites"){
    correct++;
  }
  if(q9 === "Pretzel"){
    correct++;
  } if(q10 === "Peach"){
    correct++;
  }
// document.getElementById("#stop").style.visibility("visible");
// document.getElementById("#correct-answers").innerHTML("Correct: " + correct );
$("#correct-answers").append("Correct: " + correct);
 };


