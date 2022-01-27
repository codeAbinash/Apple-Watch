$(document).ready(function(){

    $("#clockdiv").click(function(){openFullscreen()});
   // $("#container").children().css("position", "absolute")
 function time(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds()
    var ms = now.getMilliseconds()
    if(hours>12){
      hours = hours-12;
    }
    $("#secDiv").css("transform","rotate("+ (seconds + ms/1000) * 6 +"deg)");
    $("#minDiv").css("transform","rotate("+ (minutes + seconds/60) * 6 +"deg)");
    $("#hrDiv").css("transform","rotate("+ (hours + minutes/60) * 30 +"deg)");
  }
setInterval(time, 20);

  $("#previous").click(function(){goBack();});

});








function loaded(){
  document.body.style.opacity="1";
}

