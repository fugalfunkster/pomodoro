$(document).ready(function(){

  //set up variables for session duration and counting to prevent users from making any changes during a countdown (except reset)
  var input = 25, counting = false;
  
  //call updateFace to make the view reflect the user's input
  var updateFace = function(math) {
      if(!counting){
        input = input + math;
        document.getElementById("session").innerHTML = input + " minutes";
        document.getElementById("nums").innerHTML = input;
      }
      else{return;}
  };
  updateFace(0);
  
  
  //add and subtract buttons to let user modify session length
  $("#add").click(function(){
    if(input===60){return;}  
    updateFace(1);
  });
  $("#subtract").click(function(){
      if(input===0){return;}
      updateFace(-1);
  });
  
  
  //countdown clock 
  $("#clock").click(function(){
 
    //first, lock out the user if the countdown has begun
    if(counting===true){return;}
    if(counting===false){counting = true;}
    //convert the user input into milliseconds
    var time = input * 60000;
    
    //set the interval for the countdown
    var countdown = setInterval(function () {timer()}, 1000);
    function timer(){
      //end the countdown at 0 and alert the user
      if(time===0){
        $("#clock").css("background-color", "red").effect("shake");
        return time;
      }
      //subtract one second from time, every second
      time = time - 1000;
      //convert time into minutes and seconds
      var minutes = Math.floor(time / 60000);
      var seconds = ((time%60000) / 1000).toString();
      if(seconds.length === 1){seconds = "0" + seconds;}
      //and update the view
      document.getElementById("nums").innerHTML = minutes + ":" + seconds;
     } 
    
    // There's only one way to stop an egg timer.....
    $("#reset").click(function(){
      //stop that infernal ticking
      clearInterval(countdown);
      //permit the user to provide input once again
      counting = false;
      //and update the view
      $("#clock").css("background-color", "white");
      updateFace(0);
      
    });
    
  });
  
});
//fin
