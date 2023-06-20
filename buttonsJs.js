/* here will reside the JS for the project, primarily filled with the functions of the 2nd and 3rd buttons! */
var dateTime = new Date();

var dateTime = new Date();
//it will print on html page

//let display = document.getElementById("displayBox"); 

//x = '';

// function displayVarValue(x){
// let display = displayVar;
// var displayVar = x;
  
// if (x = 'Cl') {
//   displayVar = dateTime
// } else if (x = 'Sm') {
//   displayVar = "You Can Do Anything!"
// } else if (x = 'Pie') {
//   displayVar = "3.14"
// } else if (x = 'Er') {
//   displayVar = "CLEARED"
// } else {
//   return displayVar; 
// }
// };

// document.getElementById("clock-icon").onclick = function() {tellTime()};

// function tellTime(){
//  document.getElementById("clickaButton").innerHtml = "<h1>" + "Today is Today!" + "</h1>";
// };

//console.log(displayVarValue(x));

document.getElementById("clock-icon").onclick = function() {tellTime()};
document.getElementById("smile-icon").onclick = function() {smileMotherFucker()};
document.getElementById("applepie-icon").onclick = function() {pi()};
document.getElementById("color-icon").onclick = function() {changeBackground()};
let tasteTheRainbow = ["red", "orange", "yellow", "green", "blue", "purple", "black"]

function tellTime() {
  document.getElementById("clickaButton").innerHTML = dateTime;
};

function smileMotherFucker() {
  document.getElementById("clickaButton").innerHTML = "YOU ARE DOING AMAZING!";
};

function pi() {
  document.getElementById("clickaButton").innerHTML = Math.PI;
};

function changeBackground(color) {
   document.body.style.background = tasteTheRainbow[Math.floor(Math.random() * tasteTheRainbow.length)]
};

//document.getElementById("yinyang-icon").onclick = function() {happyToSad()};

// function happyToSad() {
//   document.getElementById("clickaButton").innerHTML =;
// };

//create a conditional function where the display value changes for each button, and if one button is displaying, then pressing another one will switch the current display off
//and the newest display on!
