var toggle = document.querySelector(".nav-toggle");
var links = document.querySelector(".links");
toggle.addEventListener("click",function(){
    links.classList.toggle("show-links")
})