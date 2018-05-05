// document ready waits for the document to load before it starts running the functions.
$( document ).ready(function() {
  

  // trivia questions with answers and the selected 'correct' answer.

var trivia = [
    { 
      q : "I was once used as an intravenous rehydration fluid when medical saline was unavailable, during World War 2.",
      a : [
        "Milk", "Lemon Juice", "Coconut Water", "Salt Water"
      ],
      correct: "Coconut Water"
    },
    { 
      q : "I contain a chemical compound called Capsaicin that bonds to your sensory nerves tricking them to think your mouth is being burned.",
      a: [
        "Ginger", "Garlic", "Onion", "Cayenne Peppers"
      ],
      correct: "Cayenne Peppers"
    },
    {
      q : "I was once traded as a currency by The Aztecs with the Mayans",
      a : [
        "Bourbon","Bread","Chocolate","Vitamins"
      ],
      correct: "Chocolate"
    },
    {
      q: "I am the ONLY food that has an eternal shelf life, AKA I never expire.",
      a: [
        "Cinnamon","Rice","Pasta","Honey"
      ],
      correct: "Honey"
    },
    {
      q: "Akutaq is a special version of ice cream containing which of the following:",
      a: [
        "Scorpion Dust","Seaweed","Reindeer Fat","Cows Tongue"
      ],
      correct: "Reindeer Fat"
    },
    {
      q: "The red food coloring: carmine (in your skittles) comes from:",
      a: [
        "Chemical Reaction","Roses","Red Wine","Beetles"
      ],
      correct: "Beetles"
    },
    {
      q: "Which of the following floats in water because 25% of it’s volume is made of air:",
      a: [
        "Oranges","Cucumbers","Apples","Carrots"
      ],
      correct: "Apples"
    },
    {
      q: "In South Africa, I am often roasted and eaten by the handful:",
      a: [
        "Popcorn", "Potatoes", "Termites", "Fried Fish Tail"
      ],
      correct: "Termites"
    },
    {
      q: "The criss-cross design in this food, was originally meant to resemble folded arms in prayer:",
      a: [
        "Apple Pie", "Pretzels", "Danish","Doughnut"
      ],
      correct: "Pretzels"
    },
    {
      q: "Almonds are a member of what family?",
      a: [
        "Tree nuts", "Lugume", "Avocado", "Peach"
      ],
      correct: "Peach"
    }

    ]


 //  45 seconds, this is your set time in seconds.
var number = 45;

// reusable variable, points to the procedure
var intervalId; 

// variables for the correct and wrong answers, will be incremented and decremented through the functions
var correct = 0;
var wrong = 0;

// $("#start").on("click", run); // start button link

// function for the start button
$("#start").on("click", function(){
  event.preventDefault();
  $("#after_submit").show();
  run();
  for(var i = 0; i < trivia.length; i++){
    var wrap = $("<div>");
    wrap.addClass("qWrap");

    var question = $("<h5>");
    question.addClass('graded mt-4');
    question.attr('id', 'question' + i);
    question.text(trivia[i].q);

    var btnGroup = $("<div>").addClass("btnGroup");
    for(var j = 0; j < trivia[i].a.length; j++){
        var btn = $("<button>").addClass("option");
        btn.attr("value", trivia[i].a[j]);
        btn.attr("id", "btn-"+j);
        btn.text(trivia[i].a[j]);
        btn.attr("data-group", i);
        $(btnGroup).append(btn);
      
    }
    $(wrap).append(question, btnGroup);
    $('#trivia-qs').append(wrap);
  }

 });




// stop button click
$("#stop").on("click", stop); 

// function run that decrements the timer every set millisecond
function run() {
  intervalId = setInterval(decrement, 1000); 
  $("#start").hide()
  
}
// function to decrement 
function decrement() {
  if (number === 0) {
    stop();
    logic();

// when the number hits 0, the timer will run through the function and stop.


    $('#trivia-qs').empty();
    console.log("r/w", correct,"/",wrong);
    var correctAnswered = $("<h2>").text("correct:"+ correct);
    var incorrectAnswered =  $("<h2>").text("wrong:"+ wrong);
    $("#show-number").append(correctAnswered, incorrectAnswered );
    $("#hello").hide();

  } else  {

    number--;
// decrement time on the timer, and to display in the html how much time you have left on the game.
    $("#show-number").html("<div" + " " + "id=hello" + ">" + "<h2>" + "You have " + number + " seconds left!" + "</h2>" + "</div>"); 
  
  }
}

function stop() {

  clearInterval(intervalId); // clears interval when the timer ends
}


// this is the value taken when the buttons are clicked
var answers = [null, null]
$(document).on("click", ".option", function(){
  var index = $(this).attr("data-group");
  $( "button[data-group='"+index+"']" ).removeClass("selected");
  $(this).addClass("selected");

  var answer = $(this).val();
  answers.splice(index, 1, answer);
  console.log(answers);

})
//this tests if the answers were wrong or right and displays the right vs wrong / score
function logic (){
  console.log("test")
 for(var i = 0; i< trivia.length;i++){
   if(trivia[i].correct === answers[i]){
     correct++;
     console.log("right",correct)
   }else {
     wrong++;
     console.log("wrong",wrong)
   }
 }
}
//to hide the button after its clicked.
$("#after_submit").on("click", function(){
  $("#after_submit").hide();
})

$("#after_submit").hide();



});

