/* here will reside the JS for the project, primarily filled with the functions of the 2nd and 3rd buttons! */
var dateTime = new Date();

document.getElementById("clock-icon").onclick = function() {tellTime()};
document.getElementById("smile-icon").onclick = function() {smileMotherFucker()};
document.getElementById("applepie-icon").onclick = function() {pi()};
document.getElementById("color-icon").onclick = function() {changeBackground()};

//document.getElementById("yinyang-icon").onclick=function() {happyToSad()};

document.getElementById("clear-icon").onclick = function() {defaultState()};

tasteTheRainbow = ["red", "orange", "yellow", "green", "blue", "purple", "black"]

function tellTime() {
  document.getElementById("clickaButton").innerHTML = dateTime;
}

function smileMotherFucker() {
  document.getElementById("clickaButton").innerHTML = "YOU ARE DOING AMAZING!";
}

function pi() {
  document.getElementById("clickaButton").innerHTML = Math.PI;
}

function changeBackground(color) {
   document.body.style.background = tasteTheRainbow[Math.floor(Math.random() * tasteTheRainbow.length)]
};

function defaultSate() {
  document.getElementById("clickaButton").innerHTML = "CLICK SOMETHING";
  document.body.style.background = "black";
};

// function happyToSad() {
//   document.getElementById("clickaButton").innerHTML =;
// };

//create a conditional function where the display value changes for each button, and if one button is displaying, then pressing another one will switch the current display off
//and the newest display on!
