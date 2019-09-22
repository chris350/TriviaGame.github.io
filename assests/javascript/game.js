$(document).ready(function() {
  var questions = [
    {
    statement:"Which is the largest country in the world by land mass?",
    answers:["China","Russia","United States","Brazil"],
    correct:"Russia",
    divClass:"countries"
    },
    {
    statement:"Which continent contains the largest number of countries?",
    answers:["Africa","Asia","South America","Europe"],
    correct:"Africa",
    divClass:"continent" 
    },
    {
      statement:"Which country has highest young population?",
      answers:["Japan","India","Australia","Malawi"],
      correct:"Malawi",
      divClass:"youngcountry"   
    },
    {
      statement:"In what continent is the ancient city of Timbuktu?",
      answers:["Africa","Asia","Europe","Australia"],
      correct:"Africa",
      divClass:"tibuktu"   
    },
    {
      statement:"Which is the worlds largest freshwater lake?",
      answers:["Lake Victoria","Lake Superior","Lake Huron","Lake Baikal"],
      correct:"Lake Superior",
      divClass:"lake"   
    },
    {
      statement:"Which year NASA land Spirit and Opportunity rovers on Mars?",
      answers:["2012","1996","2006","2004"],
      correct:"2004",
      divClass:"space"   
    },
    {
      statement:"What is baby shark called?",
      answers:["calf","joey","pup","sharklet"],
      correct:"pup",
      divClass:"babyshark"   
    },
    {
      statement:"Whis the tallest mountain on the Earth?",
      answers:["Mount Everest","Mount Washington","Mount Whitney","Mount St. Helens"],
      correct:"Mount Everest",
      divClass:"mountain"   
    }
  ];
  var totalQuestions=8;
  var labels = ["first", "second", "third", "forth","fifth","sixth","seventh","eighth"];

  //Display trivia questions on page
  function displayQuestion(){
    for(var i= 0; i < totalQuestions ; i++)
    {
      $(".form-group").prepend("<div class="+questions[i].divClass+"></div>");
      var divQuestion=$('<div class=statement>'+questions[i].statement+'</div>');
      $('.'+questions[i].divClass).append(divQuestion);

      let answersArrayLen=questions[i].answers.length;     
       for(var x= 0;x < answersArrayLen; x++){
        $("."+questions[i].divClass).append("<div class='radio-inline'><input class='form-check-input' type='radio' name="+questions[i].divClass+" value="+questions[i].answers[x]+"><label class='form-check-label' for="+labels[x]+">"+questions[i].answers[x]+"</label></div>");
      }
    }//for i<totalQuestions
  }

    //countdown 
    var timeleft = 30;
    function initiateCountdown(){
        //start countdown from 30 seconds.
        var downloadTimer = setInterval(function () {document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          console.log("After clear interval...")
        }}, 1000);
    }



initiateCountdown();
displayQuestion();

}); //document.ready