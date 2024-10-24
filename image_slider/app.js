const employee_image = document.getElementById("employee_image");
const employee_name = document.getElementById("employee_name");
const employee_role = document.getElementById("employee_role");
const employee_about = document.getElementById("employee_about");
const left_button = document.getElementById("left_scroll");
const right_button = document.getElementById("right_scroll");
const suprise_btn = document.getElementById("suprise_btn");


var datas = [{
    employee_img :"image_slider/assets/images/thayub.jpg",
    name  : "Mohideen Thayub",
    role : "Cyber security engineer",
    about :"Cybersecurity excites me, as it offers the challenge of safeguarding data, networks, and systems from evolving digital threats.",

},{
    
        employee_img :"image_slider/assets/images/sherif.jpg",
        name  : "Mohamed Sherif",
        role : "Web engineer",
        about :"I'm passionate about web engineering, where creativity and technology unite to build seamless, responsive, and dynamic user experiences.",
    
    

},
{
    
    employee_img :"image_slider/assets/images/venkat.jpg",
    name  : "venkatesh sivakumar",
    role : "Software engineer",
    about : "I'm passionate about software engineering, where problem-solving, coding, and innovation come together to create impactful and efficient software solutions.",



},
{
    
    employee_img :"image_slider/assets/images/naveen.jpg",
    name  : "Naveen sathyamoorthy",
    role : "Test Lead engineer",
    about :"I'm passionate about testing, ensuring software quality and reliability through thorough validation, identifying bugs, and enhancing user satisfaction.",



}
];
var increament = 0;
right_button.addEventListener("click",function(){
increament++;
if (increament > datas.length-1){
    increament = 0;
}
var styles = datas;
employee_image.src =styles[increament].employee_img
employee_name.textContent =styles[increament].name
employee_role.textContent =styles[increament].role
employee_about.textContent =  styles[increament].about;
});
left_button.addEventListener("click",function(){
increament --;
if (increament < -1){
    increament = 0;
}
var styles = datas;
employee_image.src =styles[increament].employee_img
employee_name.textContent =styles[increament].name
employee_role.textContent =styles[increament].role
employee_about.textContent =  styles[increament].about;
});
