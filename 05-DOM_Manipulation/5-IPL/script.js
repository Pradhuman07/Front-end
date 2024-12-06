var btn = document.querySelector("button")
var h2 = document.querySelector("h2")
var body = document.querySelector("body")

var teams = ["MI", "CSK", "RCB", "KXIP", "RR", "SRH","GT","KKR"] //7 indexes therefore we should multiply by 8 ==> Math.random range = [0,7]

var images = ["https://i.pinimg.com/1200x/e8/87/a8/e887a81959a66337b7ccc7835c38470e.jpg" , 
    "https://i.pinimg.com/1200x/03/b0/b5/03b0b54ca52d096fd1cb0dada03f96e2.jpg" ,
    "https://i.pinimg.com/1200x/45/98/55/459855b3941724ecbe0108aaf85984d9.jpg" , 
    "https://i.pinimg.com/1200x/e1/af/ab/e1afabe17881759523b0519ec094e88f.jpg" , 
    "https://i.pinimg.com/1200x/2b/f4/70/2bf47031004549651a7a8364b5907f0c.jpg" ,
    "https://i.pinimg.com/1200x/c7/b4/14/c7b4147d5760a9914f4b89ebee79b627.jpg" ,
    "https://i.pinimg.com/1200x/07/d2/69/07d269709e59fe579e6e750683feb062.jpg" ,
    "https://i.pinimg.com/1200x/ef/2e/7d/ef2e7d6ca09e6e9cddf4a828d5bbd8f9.jpg"
]

btn.addEventListener("click",function(){
    var random = Math.floor(Math.random()*8)
    h2.innerHTML = teams[random] //ye ek variable h to isko "" lgake string mt bna dena
    body.style.backgroundImage = `url(${images[random]})`  //images[random] bhi ek variable h to usko execute krwane ke liye yhi krna pdega
})