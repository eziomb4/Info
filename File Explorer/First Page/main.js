alert("This Web Application Is Under Development")
function maps(){
    window.location.replace("https://www.google.com/maps")
    window.history.go(-1)

}
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
