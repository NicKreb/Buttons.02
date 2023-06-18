/* here will reside the JS for the project, primarily filled with the functions of the 2nd and 3rd buttons! */
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

var displayVar = "blank";

function displayBoxResults(displayVar) {
  
  if (displayVar = "blank") {
    document.getElementById("displayBox").innerHTML = "<h1> Display Results Here! </h1>";
  } else if (displayVar = "time") {
    document.getElementById("displayBox").innerHTML = "<h1>" + {dateTime} + "</h1>";
  } else if (displayVar = "Pie") {
    document.getElementById("displayBox").innerHTML = "<h1> 3.14 </h1>"
  }
};
//create a conditional function where the display value changes for each button, and if one button is displaying, then pressing another one will switch the current display off
//and the newest display on!
