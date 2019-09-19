$(document).ready(function() {

    //countdown 
    var timeleft = 30;
    function initiateCountdown(){
        //start countdown from 30 seconds.
        var downloadTimer = setInterval(function () {document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          console.log("After clear interval...")
          //document.getElementById("countdown").innerHTML = "Finished"
        }}, 1000);
    }

    //On button click event
$("#submitButton").on("click", function() {
});


initiateCountdown();


}); //document.ready