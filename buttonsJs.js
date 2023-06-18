/* here will reside the JS for the project, primarily filled with the functions of the 2nd and 3rd buttons! */
var dateTime = new Date();

x = '';

function displayVarValue(x){
let displayVar = ""
  
if (x = 'Cl') {
  displayVar = dateTime
} else if (x = 'Sm') {
  displayVar = "You Can Do Anything!"
} else if (x = 'Pie') {
  displayVar = "3.14"
} else if (x = 'Er') {
  displayVar = "Click a Button!"
} else {
  return displayVar; 
}
};

console.log(displayVarValue(x));
//create a conditional function where the display value changes for each button, and if one button is displaying, then pressing another one will switch the current display off
//and the newest display on!
