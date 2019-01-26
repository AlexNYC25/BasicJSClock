 // Current time is displayed but does not updatet and is in global standard


 function updateClock(){
    var todayDate = new Date();
    var stringToBeUsed = todayDate.getTime();
   
    var theCurrentHour = todayDate.getHours()%12;
    var theCurrentMin = todayDate.getMinutes();
    var theCurrentMilMin = todayDate.getMilliseconds() % 100;
   
    var timeSTR = theCurrentHour + ":" + theCurrentMin + ":" + theCurrentMilMin;
   
   // window.alert(stringToBeUsed);
   
    var doc = document.getElementById("timeLoc");
    doc.textContent = timeSTR;

    setTimeout(updateClock, 200)
 }

document.getElementById("timeLoc").addEventListener("load", updateClock())