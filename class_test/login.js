const user_form = document.getElementById("user_form");
const userName = document.getElementById("userName")
const user_error = document.querySelector(".user_error");
const user_age = document.querySelector(".user_age")
const age_error = document.querySelector(".age_error");
const user_salary= document.getElementById("user_salary");
const salary_error = document.querySelector(".salary_error");
const button = document.getElementById("btn");


user_form.addEventListener("submit",function(e){
    if (userName.value  === ''){
        user_error.textContent = "you must enter something";
        e.preventDefault();
    }
    else if (userName.value.length < 8 ){
     user_error.textContent = "username must be 8 to 12 character";
    e.preventDefault();
    }
    else{
        user_error.textContent = "";
    }
    if (user_age.value == ''){
        age_error.textContent = "it should be not empty";
        e.preventDefault();
    }
    else if(user_age.value <= 18 || user_age.value > 65){
        age_error.textContent = "it should be greater than 18 or less than 65";
        e.preventDefault();
    }
    else{
        age_error.textContent ="";

    }
    if (user_salary.value === ''){
        salary_error.textContent = "it should not be empty";
        e.preventDefault();
    }
    else if (user_salary.value < 10000 || user_salary.value > 65000){
        salary_error.textContent = "it should be greater  than 10000 or less than 65000";
        e.preventDefault();
    }
    else{
        salary_error.textContent = "";
    }
})
user_form.reset();