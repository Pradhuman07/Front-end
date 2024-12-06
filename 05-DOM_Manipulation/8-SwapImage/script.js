var btn = document.querySelector("button")
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")

btn.addEventListener("click",function(){
    var img1Src = img1.getAttribute("src")
    var img2Src = img2.getAttribute("src")
    
    img1.setAttribute("src",img2Src)
    img2.setAttribute("src",img1Src)
    
    // img1.setAttribute("src",img2.getAttribute("src"))    //won't work correctly bcoz after the execution of this line both the imgs will have the same src 
    // img2.setAttribute("src",img1.getAttribute("src"))   

})