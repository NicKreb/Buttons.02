/* here will reside the JS for the project, primarily filled with the functions of the 2nd and 3rd buttons! */
var dateTime = new Date();

document.getElementById("clock-icon").onclick = function() {tellTime()};
document.getElementById("smile-icon").onclick = function() {smileMotherFucker()};
document.getElementById("applepie-icon").onclick = function() {pi()};
document.getElementById("color-icon").onclick = function() {changeBackground()};

document.getElementById("clear-icon").onclick = function() {defaultState()};

tasteTheRainbow = ["red", "orange", "yellow", "green", "blue", "purple"]

document.getElementById("yinyang-icon").onmousedown = function() {shockedFace()};

document.getElementById("yinyang-icon").onmouseup = function() {faceSwap()};

function tellTime() {
  document.getElementById("clickaButton").innerHTML = dateTime;
}

function pi() {
  document.getElementById("clickaButton").innerHTML = Math.PI;
}

function changeBackground(color) {
   document.body.style.background = tasteTheRainbow[Math.floor(Math.random() * tasteTheRainbow.length)]
};

function defaultState() {
   document.getElementById("clickaButton").innerHTML = "CLICK SOMETHING";
   document.getElementById("face-icon").innerHTML = "<i align='center' id='smile-icon' class='button fa-solid fa-face-smile'></i>";
   document.body.style.background = "black";
};

//Yinyang, and face button functions below

$(function() {
  $('#yinyang-icon').hover(function() {
    $('.fa-face-smile').css('color', '#FF842E');
  }, function() {
    $('.fa-face-smile').css('color', 'gold');
  });
});

$(function() {
  $('.fa-face-smile').hover(function() {
    $('.fa-face-smile').css('color', '#33C4FF');
  }, function() {
    $('.fa-face-smile').css('color', 'gold');
  });
});

function shockedFace() {
  document.getElementById("face-icon").innerHTML = "<i align='center' class='button fa-solid fa-face-surprise' style='color:#FF842E'></i>" ;
};

function faceSwap() {
  document.getElementById("face-icon").innerHTML = "<i align='center' id='sad-icon' class='button fa-solid fa-face-sad-tear' value='2'></i>"
};

function hasClass(elem, className) {
  return elem.classList.contains(className);
}

document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'fa-face-smile')) {
       document.getElementById("clickaButton").innerHTML = "YOU ARE DOING AMAZING!";
    } else if (hasClass(e.target, 'fa-face-sad-tear')) {
        document.getElementById("clickaButton").innerHTML = "Why did you do this to me?"
    }
}, false);
