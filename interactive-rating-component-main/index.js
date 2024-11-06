const first_container = document.querySelector(".container");
const second_container = document.querySelector(".second_container")
const buttons = document.querySelectorAll(".btn");
const ratings = document.querySelector(".rating");
const submit_btn = document.getElementById("submit_btn");

var dump ;
buttons.forEach(function(items){
    items.addEventListener("click",function(e){
        dump = e.target.textContent
        e.target.style.backgroundColor = "red";

    })

});

submit_btn.addEventListener("click",function(event){
    if (dump == undefined){
        alert("enter something")
        
    }
    else{
        ratings.textContent = `you are rating is ${dump} is 5`;
        first_container.style.display = "none"
        second_container.style.display = "block"

    }
   
})


