// alert("This Web Application Is Under Development")
function maps(){
    window.location.replace("https://www.google.com/maps")
    window.history.go(-1)

}
let Time = document.querySelector('.time'); 
function printtime(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let time = date.getTime();
    Time.innerHTML = day + " / " + month + " / " + year;
}
printtime();

    
function youtube(){
    window.open("https://www.youtube.com/" , "_blank")
}
function home() {
    alert("Press Home");
}
document.getElementById("Forward").onclick= function() {
    location.href = "secondpage.html";
}
document.getElementById("Backward").onclick= function() {
    window.history.back(-1)
}
document.getElementById("Home").onclick= function() {
    location.href="main.html";
}
