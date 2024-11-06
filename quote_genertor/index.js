const quoates = document.querySelector(".quotes");
const btn = document.getElementById("button");

btn.addEventListener("click",function(){
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
.then((msg)=>msg.json())
.then((message) => {
    var result = message[0].setup;
    return result;
})
.catch((err)=>console.log(err));
})
.then().function(params){
    quoates.textContent = params
}
