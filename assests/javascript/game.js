$(document).ready(function() {
  var questions = [
    {
    statement:"First question goes here",
    answers:["answer1.1","answer1.2","answer1.3","answer1.4"],
    correct:"answer1.2",
    divClass:"OneOOne"
    },
    {
    statement:"Second question goes here",
    answers:["answer2.1","answer2.2","answer2.3","answer2.4"],
    correct:"answer2.4",
    divClass:"TwoOOne" 
    },
    {
      statement:"Third question goes here",
      answers:["answer3.1","answer3.2","answer3.3","answer3.4"],
      correct:"answer3.3",
      divClass:"ThreeOOne"   
    }
  ];
  var totalQuestions=3;
  var labels = ["first", "second", "third", "forth"];

  //Display trivia questions on page
  function displayQuestion(){
    for(var i= 0; i < totalQuestions ; i++)
    {
      $(".form-group").prepend("<div class="+questions[i].divClass+">"+questions[i].statement+"</div>");
      let answersArrayLen=questions[i].answers.length;     
       for(var x= 0;x < answersArrayLen; x++){
        $("."+questions[i].divClass).append("<div class='form-check'><input class='form-check-input' type='radio' name="+questions[i].divClass+" value="+questions[i].answers[x]+"><label class='form-check-label' for="+labels[x]+">"+questions[i].answers[x]+"</label></div>");
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