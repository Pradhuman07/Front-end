var h1 = document.createElement("h1")

h1.innerHTML = "Hello from JS"
h1.style.color = "White"
h1.style.backgroundColor = "lightseagreen"

var body = document.querySelector("body")
var htmlh1 = document.querySelector(".htmlh1")

htmlh1.addEventListener("click",function(){
    body.appendChild(h1)
})