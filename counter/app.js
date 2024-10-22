const heading = document.getElementById("display");
const btns = document.querySelectorAll(".btn");
var count = 0;
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        heading.textContent = count;
    })
})

// we can wite another way also 
