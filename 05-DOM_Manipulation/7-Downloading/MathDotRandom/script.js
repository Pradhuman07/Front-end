var button = document.querySelector("button")
var h1 = document.querySelector(".content h1")
var filler = document.querySelector(".filler")
var x = 0

var timer = Math.floor(Math.random()*101)
// console.log(timer);

button.addEventListener("click" , function(){
    button.innerHTML = "Downloading"

    var abc = setInterval(function(){
        x++;
        h1.innerHTML = x + "%";
        filler.style.width = x + "%"
    },timer)

    setTimeout(function(){
        clearInterval(abc);
        button.innerHTML = "Downloaded"
        button.style.opacity = 0.8
        button.style.pointerEvents = "none"
    },timer*100)
})