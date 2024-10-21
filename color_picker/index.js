
var  body = document.getElementById("body");
var  change_button = document.getElementById("color_change");
var  show_color = document.getElementById("show_color");

var backgroundColors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "teal",
    "brown",
    "gray"
  ];
change_button.addEventListener("click",function(){
    var random_number = Math.floor(Math.random() * 10);
    body.style.backgroundColor = backgroundColors[random_number];
    show_color.textContent = backgroundColors[random_number];
    show_color.style.color = backgroundColors[random_number]
})
  