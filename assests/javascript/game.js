$(document).ready(function () {
  var questions = [
    {
      statement: "Which is the largest country in the world by land mass?",
      answers: ["China", "Russia", "United States", "Brazil"],
      correct: "Russia",
      name:"countries",
      divClass: "countries"
    },
    {
      statement: "Which continent contains the largest number of countries?",
      answers: ["Africa", "Asia", "South America", "Europe"],
      correct: "Africa",
      name:"continent",
      divClass: "continent"
    },
    {
      statement: "Which country has highest young population?",
      answers: ["Japan", "India", "Australia", "Malawi"],
      correct: "Malawi",
      name:"youngcountry",
      divClass: "youngcountry"
    },
    {
      statement: "In what continent is the ancient city of Timbuktu?",
      answers: ["Africa", "Asia", "Europe", "Australia"],
      correct: "Africa",
      name:"tibuktu",
      divClass: "tibuktu"
    },
    {
      statement: "Which is the worlds largest freshwater lake?",
      answers: ["Lake Victoria", "Lake Superior", "Lake Huron", "Lake Baikal"],
      correct: "Lake Superior",
      name:"lake",
      divClass: "lake"
    },
    {
      statement: "Which year NASA land Spirit and Opportunity rovers on Mars?",
      answers: ["2012", "1996", "2006", "2004"],
      correct: "2004",
      name:"space",
      divClass: "space"
    },
    {
      statement: "What is baby shark called?",
      answers: ["calf", "joey", "pup", "sharklet"],
      correct: "pup",
      name:"babyshark",
      divClass: "babyshark"
    },
    {
      statement: "Which the tallest mountain on the Earth?",
      answers: ["Mt. Everest", "Mt. Washington", "Mt. Whitney", "Mt. St. Helens"],
      correct: "Mt. Everest",
      name:"mountain",
      divClass: "mountain"
    }
  ];
  var totalQuestions = 8;
  var labels = ["first", "second", "third", "forth", "fifth", "sixth", "seventh", "eighth"];

  //Display trivia questions on page
  function displayQuestion() {
    for (var i = 0; i < totalQuestions; i++) {
      $(".form-group").prepend("<div class=" + questions[i].divClass + "></div>");
      var divQuestion = $('<div class="statement">' + questions[i].statement + '</div>');
      $('.' + questions[i].divClass).append(divQuestion);

      let answersArrayLen = questions[i].answers.length;
      for (var x = 0; x < answersArrayLen; x++) {
        $("." + questions[i].divClass).append("<div class='radio-inline'><input class='form-check-input' type='radio' name=" + questions[i].divClass + " value=" + questions[i].answers[x] + "><label class='form-check-label' for=" + labels[x] + ">" + questions[i].answers[x] + "</label></div>");
      }
    }//for i<totalQuestions
  }

  //countdown 
  var timer = 0;
  function initiateCountdown(seconds) {
    timer = setInterval(function() {
      seconds = seconds - 1;
      $("#countdown").html(seconds);

      if (seconds <= 0) {
        var correctAnswers = 0;
        var wrongAnswers = 0;
        var unAnswered = 0;
      
        // loop through correctArray & radioName to match html elements & answers
        for (var i = 0; i < totalQuestions; i++) {
            var result = $('input:radio[name="' + questions[i].name + '"]:checked').val()
            if (result === questions[i].correct) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
          $('#correctAnswers').html("<h2>Correct answers:"+correctAnswers+"</h2>");
          $('#wrongAnswers').html("<h2>Wrong answers:"+wrongAnswers+"</h2>");
        };
        
        $('.top-container').fadeOut();
        clearInterval(timer);
        //show anserscreen
        $('.result-screen').show();
        return;
      }
  }, 1000);
    
} //end initiateCountdown

// click event for submit button to stop timer
$('#submitButton').on('click', function() {
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;

  // loop through correctArray & radioName to match html elements & answers
  for (var i = 0; i < totalQuestions; i++) {
      var result = $('input:radio[name="' + questions[i].name + '"]:checked').val()
      if (result === questions[i].correct) {
          correctAnswers++;
      } else {
          wrongAnswers++;
      };
    $('#correctAnswers').html("<h2>Correct answers:"+correctAnswers+"</h2>");
    $('#wrongAnswers').html("<h2>Wrong answers:"+wrongAnswers+"</h2>");
  };
  
  $('.top-container').fadeOut();
  clearInterval(timer);
  //show anserscreen
  $('.result-screen').show();
});

  var seconds = 60;
  initiateCountdown(seconds);
  displayQuestion();
  
}); //document.ready