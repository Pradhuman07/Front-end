let button = document.querySelector("button")
let h1 = document.querySelector("h1")
let img = document.querySelector("img")

button.addEventListener("click",function(){
    if(button.textContent==="Add Friend"){
        h1.textContent = "Friends💚"
        h1.style.color = "green"
        button.textContent = "Remove Friend"
        button.style.backgroundColor = "#e21212b4"
        img.style.boxShadow = "20px 20px 100px Green"
        img.style.border = "2px solid Green"
    }
    else if(button.textContent==="Remove Friend"){
        h1.textContent = "Stranger❤️"
        h1.style.color = "red"
        button.textContent = "Add Friend"
        button.style.backgroundColor = "#008000b4"
        img.style.border = "2px solid red"
        img.style.boxShadow = ""
    }
})