// alert("This Web Application Is Under Development")
function maps(){
    window.location.replace("https://www.google.com/maps")
    window.history.go(-1)

}
let homee = document.querySelector(".home");
 homee.addEventListener('click',function(){
 alert("Homeee");
  });
let navigation = document.querySelector(".navigation");
  navigation.addEventListener('click',function(){
  alert("Navigation");
  });
let connect = document.querySelector(".connect");
  connect.addEventListener('click',function(){
  alert("Connect");
  });
let more = document.querySelector(".more");
  more.addEventListener('click',function(){
  alert("More");
  location.href="File Explorer/main.html";
  });

// let Time = document.querySelector('.time'); 
// function printtime(){
//     let date = new Date();
//     let day = date.getDate();
//     let month = date.getMonth()+1;
//     let year = date.getFullYear();
//     let time = date.getTime();
//     Time.innerHTML = day + " / " + month + " / " + year;
// }
// printtime();

    
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
document.getElementsByClassName("Home").onclick= function() {
    alert('Pressed Home');
    location.href="main.html";
}
document.getElementsByClassName("More").onclick= function(){
    location.href="File Explorer/main.html";
}


// Weather Detail 
const api_key = "25ab478e79e0c9e70215e814ca7e1b00";
const api_url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=&units=metric";
const cityname= document.querySelector('.search');
const search = document.querySelector('.searchbtn');

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={25ab478e79e0c9e70215e814ca7e1b00}
async function checkWeather(cityname){
    const response = await fetch(api_url + cityname + `&appid=${api_key}`);
    var data = await response.json();

    console.log(data);
    document.querySelector('.cityname').innerHTML = data.name;
    
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp);
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(cityname.value);
})
